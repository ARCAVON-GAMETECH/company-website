// app/api/cards/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Character from "@/models/Character";
import Map from "@/models/Map";
import Weapon from "@/models/Weapon";
import { getAdminFromCookies } from "@/lib/auth";

export async function GET(req: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  console.log(`API: Fetching cards for category: ${category}`);

  let cards = [];
  try {
    if (category === "characters" || category === "character") {
      cards = await Character.find().sort({ createdAt: -1 });
    } else if (category === "maps" || category === "map") {
      cards = await Map.find().sort({ createdAt: -1 });
    } else if (category === "weapons" || category === "weapon") {
      cards = await Weapon.find().sort({ createdAt: -1 });
    } else {
      console.log("API: No valid category provided");
      return NextResponse.json({ message: "Category required" }, { status: 400 });
    }

    console.log(`API: Found ${cards.length} cards for ${category}`);
    return NextResponse.json(cards);
  } catch (error) {
    console.error("Fetch cards error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = getAdminFromCookies();
    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { category, title, description, imageUrl } = await req.json();

    if (!category || !title || !description || !imageUrl) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    let card;
    if (category === "characters" || category === "character") {
      card = await Character.create({ title, description, imageUrl, category: "character" });
    } else if (category === "maps" || category === "map") {
      card = await Map.create({ title, description, imageUrl, category: "map" });
    } else if (category === "weapons" || category === "weapon") {
      card = await Weapon.create({ title, description, imageUrl, category: "weapon" });
    } else {
      return NextResponse.json({ message: "Invalid category" }, { status: 400 });
    }

    return NextResponse.json(card, { status: 201 });
  } catch (error) {
    console.error("Create card error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

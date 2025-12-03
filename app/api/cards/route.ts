// app/api/cards/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Card from "@/models/Card";
import { getAdminFromCookies } from "@/lib/auth";

export async function GET(req: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const query: any = {};
  if (category) query.category = category;

  const cards = await Card.find(query).sort({ createdAt: -1 });
  return NextResponse.json(cards);
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

    const card = await Card.create({ category, title, description, imageUrl });
    return NextResponse.json(card, { status: 201 });
  } catch (error) {
    console.error("Create card error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

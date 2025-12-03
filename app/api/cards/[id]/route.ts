// app/api/cards/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Character from "@/models/Character";
import Map from "@/models/Map";
import Weapon from "@/models/Weapon";
import { getAdminFromCookies } from "@/lib/auth";

type Params = { params: { id: string } };

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const admin = getAdminFromCookies();
    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let deleted = null;

    if (category === "characters" || category === "character") {
      deleted = await Character.findByIdAndDelete(params.id);
    } else if (category === "maps" || category === "map") {
      deleted = await Map.findByIdAndDelete(params.id);
    } else if (category === "weapons" || category === "weapon") {
      deleted = await Weapon.findByIdAndDelete(params.id);
    } else {
      // Fallback: try all
      deleted = await Character.findByIdAndDelete(params.id);
      if (!deleted) deleted = await Map.findByIdAndDelete(params.id);
      if (!deleted) deleted = await Weapon.findByIdAndDelete(params.id);
    }

    if (!deleted) {
      return NextResponse.json({ message: "Card not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Card deleted" });
  } catch (error) {
    console.error("Delete card error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

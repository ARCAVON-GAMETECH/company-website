// app/api/cards/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Card from "@/models/Card";
import { getAdminFromCookies } from "@/lib/auth";

type Params = { params: { id: string } };

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const admin = getAdminFromCookies();
    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const card = await Card.findByIdAndDelete(params.id);
    if (!card) {
      return NextResponse.json({ message: "Card not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Card deleted" });
  } catch (error) {
    console.error("Delete card error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

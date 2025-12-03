import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    console.log("DB CONNECTED");

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });
    }

    const exists = await Admin.findOne({ email });
    if (exists) {
      return NextResponse.json({ message: "Admin already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashed,
    });

    return NextResponse.json(
      { message: "Admin created successfully" },
      { status: 201 }
    );

  } catch (err) {
    console.error("Create Admin Error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import { setAdminCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    console.log("DB CONNECTED");
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash); // <-- fix here
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    setAdminCookie({
      adminId: admin._id.toString(),
      email: admin.email,
    });

    return NextResponse.json({ message: "Logged in successfully" });
  } catch (err) {
    console.error("Login error", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// app/api/admin/me/route.ts
import { NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";

export async function GET() {
  const admin = await getAdminFromCookies();

  if (!admin || typeof admin === "string") {
    return NextResponse.json({ isAdmin: false }, { status: 200 });
  }

  return NextResponse.json({
    isAdmin: true,
    admin: {
      id: admin.adminId,
      email: admin.email,
    },
  });
}

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function setAdminCookie(data: { adminId: string; email: string }) {
  const token = jwt.sign(data, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  const cookieStore = await cookies(); // <<< IMPORTANT

  cookieStore.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

export async function getAdminFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
}

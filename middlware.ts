// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

function isProtectedApiPath(pathname: string) {
  if (pathname.startsWith("/api/admin")) return true;
  if (pathname.startsWith("/api/cards") && pathname !== "/api/cards") return true;
  if (pathname.startsWith("/api/posts") && pathname !== "/api/posts" && !pathname.endsWith("/like")) return true;
  return false;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminPage = pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  const isProtected = isAdminPage || isProtectedApiPath(pathname);

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    // For pages, redirect. For API, return 401.
    if (pathname.startsWith("/admin")) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch {
    if (pathname.startsWith("/admin")) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
    return new NextResponse("Unauthorized", { status: 401 });
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};

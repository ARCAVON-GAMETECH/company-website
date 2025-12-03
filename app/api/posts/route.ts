// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { getAdminFromCookies } from "@/lib/auth";

export async function GET() {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  try {
    const admin = getAdminFromCookies();
    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { caption, mediaUrls } = await req.json();

    if (!caption) {
      return NextResponse.json({ message: "Caption is required" }, { status: 400 });
    }

    const post = await Post.create({
      caption,
      mediaUrls: Array.isArray(mediaUrls) ? mediaUrls : [],
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Create post error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

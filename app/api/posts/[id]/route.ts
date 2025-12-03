// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { getAdminFromCookies } from "@/lib/auth";

type Params = { params: { id: string } };

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const admin = getAdminFromCookies();
    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const post = await Post.findByIdAndDelete(params.id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted" });
  } catch (error) {
    console.error("Delete post error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


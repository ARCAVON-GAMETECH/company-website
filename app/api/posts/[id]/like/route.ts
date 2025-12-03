// app/api/posts/[id]/like/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

type Params = { params: { id: string } };

export async function POST(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    post.likesCount += 1;
    await post.save();

    return NextResponse.json({ likesCount: post.likesCount });
  } catch (error) {
    console.error("Like post error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

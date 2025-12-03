// models/Post.ts
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    caption: { type: String, required: true },
    mediaUrls: { type: [String], default: [] },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;

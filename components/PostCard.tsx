"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function PostCard({ post }: { post: { _id: string; likes: number; media: string; caption: string } }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const handleLike = async () => {
    setLiked(!liked);
    setLikes((prev: number) => (liked ? prev - 1 : prev + 1));

    try {
      await fetch(`/api/posts/${post._id}/like`, { method: "POST" });
    } catch {
      setLiked(!liked);
      setLikes((prev: number) => (liked ? prev + 1 : prev - 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto bg-black/60 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.25)] mb-12 overflow-hidden"
    >
      {/* MEDIA */}
      <div className="w-full max-h-[70vh] overflow-hidden bg-black">
        {post.media.endsWith(".mp4") ? (
          <video controls className="w-full h-full object-cover">
            <source src={post.media} type="video/mp4" />
          </video>
        ) : (
          <img
            src={post.media}
            alt="post media"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 flex justify-between items-center">
        <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
          {post.caption}
        </p>

        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-cyan-300 font-bold hover:text-cyan-400 transition"
        >
          <Heart
            size={26}
            className={`${liked ? "fill-cyan-400 text-cyan-400 scale-110" : ""} transition`}
          />
          <span>{likes}</span>
        </button>
      </div>
    </motion.div>
  );
}

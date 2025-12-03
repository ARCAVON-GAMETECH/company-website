"use client";

import PostCard from "./PostCard";
import { motion } from "framer-motion";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const samplePosts = [
  {
    _id: "1",
    caption: "NEW MAP — NEON DISTRICT IS LIVE!",
    likes: 112,
    media: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
  },
  {
    _id: "2",
    caption: "FIRST LOOK — VX-9 PLASMA RIFLE TEST FIRING 🔥",
    likes: 257,
    media: "https://images.unsplash.com/photo-1603349206295-dde20617a8f6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    _id: "3",
    caption: "OFFICIAL TRAILER DROP",
    likes: 412,
    media: "/trailer.mp4",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative w-full py-28 px-6 md:px-12 bg-black overflow-hidden"
    >
      {/* holographic background grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,rgba(0,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(0,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`text-center text-5xl md:text-7xl font-bold mb-14 tracking-widest text-cyan-300 drop-shadow-[0_0_16px_rgba(0,255,255,0.7)] uppercase ${michroma.className}`}
      >
        COMMUNITY FEED
      </motion.h2>

      {/* Grid of posts */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {samplePosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}

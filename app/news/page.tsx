"use client";

import PostCard from "@/components/PostCard";

const dummyPosts = [
  {
    _id: "1",
    media: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&auto=format",
    caption: "NEON DISTRICT — live battleground this weekend!",
    likes: 124,
  },
  {
    _id: "2",
    media: "https://images.unsplash.com/photo-1603349206295-dde20617a8f6?q=80&auto=format",
    caption: "Introducing VX-9 Plasma Rifle — engineering perfection.",
    likes: 232,
  },
  {
    _id: "3",
    media: "/trailer.mp4",
    caption: "Gameplay trailer — every frame handcrafted with passion.",
    likes: 612,
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6">
      <h1 className="text-center text-5xl md:text-7xl font-bold tracking-widest text-cyan-300 mb-16 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
        News
      </h1>

      <div className="flex flex-col gap-10">
        {dummyPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}

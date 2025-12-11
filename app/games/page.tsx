"use client";

import { motion } from "framer-motion";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16 flex flex-col">
      <section className="px-6 md:px-12 max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl text-white font-bold tracking-wider mb-16 font-[family-name:var(--font-hanuman)]"
        >
          Our Games
        </motion.h1>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex items-center justify-center"
        >
          <h2 className="text-4x1 md:text-6xl lg:text-7xl text-[#00c2ff] font-bold tracking-[0.2em] drop-shadow-[0_0_30px_rgba(0,194,255,0.5)] font-[family-name:var(--font-chakra)] animate-pulse">
            COMING SOON !!
          </h2>
        </motion.div>
      </section>
    </main>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  const stats = [
    { number: "2025", label: "FOUNDED" },
    { number: "∞", label: "POSSIBILITIES" },
    { number: "100%", label: "PASSION" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-24 px-6 md:px-12 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c2ff]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight uppercase font-[family-name:var(--font-hanuman)]">
              Who We Are
            </h2>
            <a
              href="/about"
              className="group text-[#00c2ff] text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest whitespace-nowrap mt-2 font-[family-name:var(--font-chakra)]"
            >
              View More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Text & Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0f0f0f] to-black p-8 md:p-10 rounded-xl border border-[#00c2ff]/20 hover:border-[#00c2ff]/40 transition-all duration-300">
              <p className="text-gray-400 leading-relaxed text-base md:text-lg tracking-wider mb-6 font-[family-name:var(--font-inter)]">
                Arcavon is a game-tech company building high-quality,
                story-driven games and tools from India for the world.
              </p>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg tracking-wider font-[family-name:var(--font-inter)]">
                We blend cutting-edge technology, gameplay, and community to
                create experiences where players and creators grow together.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#0f0f0f] to-black p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#00c2ff]/40 transition-all duration-300 group text-center relative overflow-hidden"
                >
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-[#00c2ff] mb-1 group-hover:scale-110 transition-transform font-[family-name:var(--font-chakra)]">
                      {stat.number}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-[family-name:var(--font-inter)]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/30 to-purple-500/30 blur-3xl rounded-full animate-pulse"></div>

              {/* Logo Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/arcavon_logo.png"
                  alt="Arcavon Logo"
                  width={384}
                  height={384}
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,194,255,0.5)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

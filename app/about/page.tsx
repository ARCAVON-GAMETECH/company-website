"use client";

import { useState } from "react";
import { Gamepad2, Code, Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { number: "2025", label: "FOUNDED" },
    { number: "∞", label: "POSSIBILITIES" },
    { number: "100%", label: "PASSION" },
  ];

  const values = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Immersive Gaming",
      description: "Crafting story-driven experiences that push the boundaries of interactive entertainment."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description: "Building AI-driven systems and robust platforms that power next-gen gaming."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Empowering developers, designers, and artists to learn, collaborate, and grow."
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight uppercase">
            About Arcavon
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed uppercase tracking-wider max-w-3xl">
            Where gaming meets innovation, and community fuels creation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-[#0f0f0f] to-black rounded-xl border border-white/10 hover:border-[#00c2ff]/40 transition-all duration-300 group text-center"
            >
              
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-[#00c2ff] mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 uppercase tracking-wider ${
              activeTab === "mission"
                ? "bg-[#00c2ff] text-black"
                : "bg-gradient-to-br from-[#0f0f0f] to-black text-gray-400 hover:text-white border border-white/10 hover:border-[#00c2ff]/40"
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 uppercase tracking-wider ${
              activeTab === "vision"
                ? "bg-[#00c2ff] text-black"
                : "bg-gradient-to-br from-[#0f0f0f] to-black text-gray-400 hover:text-white border border-white/10 hover:border-[#00c2ff]/40"
            }`}
          >
            Our Vision
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl">
          {activeTab === "mission" && (
            <div className="bg-gradient-to-br from-[#0f0f0f] to-black p-8 md:p-12 rounded-xl border border-[#00c2ff]/30 hover:border-[#00c2ff]/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff]/10 rounded-lg flex items-center justify-center text-[#00c2ff] group-hover:bg-[#00c2ff]/20 transition-all">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6 uppercase tracking-wide">What We Do</h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-4 uppercase tracking-wider">
                    Arcavon is a game-tech company focused on crafting immersive, story-driven games while building the technology and platforms that power the next generation of interactive experiences.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg uppercase tracking-wider">
                    From sci-fi worlds and AI-driven systems to robust backend and community tools, Arcavon sits at the intersection of gaming and technology.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="bg-gradient-to-br from-[#0f0f0f] to-black p-8 md:p-12 rounded-xl border border-[#00c2ff]/30 hover:border-[#00c2ff]/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff]/10 rounded-lg flex items-center justify-center text-[#00c2ff] group-hover:bg-[#00c2ff]/20 transition-all">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6 uppercase tracking-wide">Where We're Going</h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-4 uppercase tracking-wider">
                    Beyond making games, Arcavon is building a dedicated community for game and game-dev enthusiasts—students, aspiring developers, designers, and artists—to learn, collaborate, and showcase their work.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg uppercase tracking-wider">
                    Through events, game jams, resources, and a growing platform, Arcavon aims to give the Indian gaming ecosystem the push it needs to compete on a global stage.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 uppercase tracking-wider">What Drives Us</h2>
          <p className="text-lg text-gray-400 uppercase tracking-wider">The pillars that define our approach</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0f0f0f] to-black p-8 rounded-xl border border-white/10 hover:border-[#00c2ff]/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#00c2ff]/10 rounded-lg flex items-center justify-center text-[#00c2ff] mb-6 group-hover:bg-[#00c2ff]/20 transition-all group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="text-xl text-white font-bold mb-3 uppercase tracking-wide">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed uppercase tracking-wider">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0f0f0f] to-black p-12 md:p-16 rounded-xl border border-[#00c2ff]/30 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 blur-3xl rounded-full"></div>
            <div className="relative w-40 md:w-48 lg:w-56 mx-auto">
              <img 
                src="/arcavon_logo.png" 
                alt="Arcavon Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
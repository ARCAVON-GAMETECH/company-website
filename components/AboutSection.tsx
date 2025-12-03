"use client";

import { motion } from "framer-motion";
import { Michroma } from "next/font/google";
import Image from "next/image";
import { Cpu, Rocket, HeartHandshake } from "lucide-react";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 overflow-hidden bg-black text-gray-300"
    >
      {/* Hologram grid background */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none"></div>

      {/* Central glowing aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15),transparent_65%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2
            className={`text-4xl md:text-6xl text-white font-bold leading-tight tracking-widest ${michroma.className}`}
          >
            WE BUILD FUTURES
            <br />
            <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
              ONE WORLD AT A TIME
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            ARCAVON is a game development studio shaping bold new realities.
            We create immersive combat universes powered by strategy, speed, and
            cutting-edge storytelling. Every weapon, every battlefield, every
            character is built with precision engineering and a whole lot of love.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-6">

            <Feature
              icon={<Cpu className="w-10 h-10 text-cyan-400" />}
              title="Innovation First"
              desc="We push boundaries using advanced tech & gameplay engineering."
            />

            <Feature
              icon={<Rocket className="w-10 h-10 text-cyan-400" />}
              title="Built for Impact"
              desc="Designed for intense combat, competitive play, and real emotion."
            />

            <Feature
              icon={<HeartHandshake className="w-10 h-10 text-cyan-400" />}
              title="Made With Love"
              desc="We craft games that feel alive — because we care about the details."
            />
          </div>
        </motion.div>

        {/* IMAGE PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(0,200,255,0.3)] bg-black/40 backdrop-blur-xl p-4 group">
            <Image
              src="/wtf.png"
              alt="Arcavon Team"
              width={500}
              height={500}
              className="rounded-lg transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-cyan-300 text-3xl tracking-[0.3em] ${michroma.className}`}
            >
              ARCAVON
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Feature = ({ icon, title, desc }: FeatureProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-black/40 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 text-center transition"
  >
    <div className="flex justify-center mb-3">{icon}</div>
    <h3 className="text-white font-bold text-sm tracking-wider mb-2">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
  </motion.div>
);

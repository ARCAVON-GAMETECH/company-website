"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 scale-105 blur-[1px]"
      >
        <source src="/arcavon.mp4" type="video/mp4" />
      </video>

      {/* Sci-fi Scan Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,119,255,0.05)_50%,rgba(0,0,0,0)_100%)] bg-[length:100%_6px] opacity-50 z-10"></div>

      {/* Top/Bottom Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* Powerline Neon border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Hologram Title */}
        <motion.h1
  initial={{ opacity: 0, y: 80, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className={`text-6xl md:text-[8rem] font-black tracking-[0.3em] ${michroma.className} select-none`}
>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a7cff] to-[#00c2ff]">
    ARCAVON
  </span>
</motion.h1>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-gray-300 tracking-[0.5em] mt-4 mb-12 uppercase"
        >
          The Future of{" "}
          <span className="text-cyan-300 font-bold drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]">
            Warfare
          </span>{" "}
          Begins
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col md:flex-row gap-8"
        >
          <Button
            variant="hero"
            onClick={() => console.log("Play Now")}
          >
            PLAY NOW
          </Button>

          <Button
            variant="default"
            onClick={() => console.log("Watch Trailer")}
          >
            WATCH TRAILER
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-7 h-12 border-2 border-cyan-400 rounded-full flex justify-center p-1 shadow-[0_0_12px_rgba(0,255,255,0.6)]">
          <div className="w-1 h-3 bg-cyan-300 rounded-full animate-ping"></div>
        </div>
      </motion.div>
    </div>
  );
}

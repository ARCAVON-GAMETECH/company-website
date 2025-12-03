"use client";

import React from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const Button = ({ children, onClick, variant = "default" }: { children: React.ReactNode; onClick?: () => void; variant?: "default" | "hero" }) => {
  const variants = {
    default:
      "text-cyan-300 bg-black/40 backdrop-blur-xl hover:text-cyan-200 transition-all duration-300",
    hero:
      "text-black bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-500 font-bold shadow-[0_0_35px_rgba(0,195,255,0.45)] hover:shadow-[0_0_45px_rgba(0,195,255,0.7)] transition-all duration-300",
  };

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-14 overflow-hidden rounded-xl px-[3px] py-[3px] group active:scale-[0.97] transition-transform ${michroma.className}`}
    >
      {/* Animated Circuit Border */}
      <span className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,#00d9ff_0%,#005eff_25%,#00faff_50%,#005eff_75%,#00d9ff_100%)] opacity-70 blur-sm animate-[spin_6s_linear_infinite] pointer-events-none" />

      {/* Inner Hologram Panel */}
      <span
        className={`relative z-10 inline-flex h-full w-full items-center justify-center rounded-[10px] px-8 ${variants[variant]}`}
      >
        {children}

        {/* Shine sweep */}
        <span className="absolute inset-0 overflow-hidden rounded-[10px]">
          <span className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 animate-shine" />
        </span>
      </span>
    </button>
  );
};

export default Button;

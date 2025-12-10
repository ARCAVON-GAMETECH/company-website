"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function OurGames() {
    return (
        <section id="games" className="relative w-full py-24 px-6 md:px-12 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-24">
                    <h2 className={`text-3xl md:text-4xl text-white font-bold tracking-wider font-[family-name:var(--font-hanuman)]`}>
                        Our Games
                    </h2>
                    <Link href="/games" className="text-[#00c2ff] text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest font-[family-name:var(--font-chakra)]">
                        View More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Content */}
                <div className="flex justify-center items-center py-20">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#0a7cff] tracking-widest text-center  drop-shadow-[0_0_30px_rgba(0,194,255,0.4)] animate-pulse font-[family-name:var(--font-chakra)]`}
                    >
                        COMING SOON !!
                    </motion.h3>
                </div>
            </div>
        </section>
    );
}

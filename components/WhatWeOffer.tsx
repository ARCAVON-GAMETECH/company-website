"use client";

import { motion } from "framer-motion";
import { Palette, Play, Bug, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeOffer() {
    const services = [
        {
            icon: <Palette className="w-12 h-12 text-[#00c2ff]" />,
            title: "2D Art",
            desc: "Concept art, illustrations, and UI/UX design.",
        },
        {
            icon: <Play className="w-12 h-12 text-[#00c2ff]" />,
            title: "3D Art & Animation",
            desc: "High-fidelity 3D models, rigging, and animation.",
        },
        {
            icon: <Bug className="w-12 h-12 text-[#00c2ff]" />,
            title: "Game Testing",
            desc: "Quality assurance and playtesting services.",
        },
    ];

    return (
        <section id="services" className="relative w-full py-24 px-6 md:px-12 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-16">
                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-wider font-[family-name:var(--font-hanuman)]">
                        What We Offer 
                    </h2>
                    <Link href="/services" className="text-[#00c2ff] text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest font-[family-name:var(--font-chakra)]">
                        View More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-10 border border-[#00c2ff]/30 rounded-xl bg-gradient-to-b from-[#0f0f0f] to-black hover:border-[#00c2ff] transition-all duration-300 flex flex-col items-center text-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,194,255,0.15)] hover:-translate-y-1"
                        >
                            <div className="p-4 rounded-full border border-[#00c2ff]/20 bg-[#00c2ff]/5 group-hover:bg-[#00c2ff]/10 transition-all">
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl text-white font-bold tracking-widest font-[family-name:var(--font-hanuman)]">
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

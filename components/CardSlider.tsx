"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

interface Card {
  id?: string;
  _id?: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface CardSliderProps {
  title: string;
  cards: Card[];
}

export default function CardSlider({ title, cards = [] }: CardSliderProps) {
  const safeCards = Array.isArray(cards) ? cards : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "0px" } },
    ],
  };

  console.log(`CardSlider [${title}]: Received ${safeCards.length} cards`, safeCards);

  return (
    <div className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`text-center text-4xl md:text-6xl font-bold mb-14 tracking-widest text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] uppercase ${michroma.className}`}
        >
          {title}
        </motion.h2>

        {/* Slider */}
        {safeCards.length === 0 ? (
          <div className="text-white text-center">
            <p>No cards found for {title}.</p>
            <p className="text-sm text-gray-500">Check console for details.</p>
          </div>
        ) : (
          <Slider {...settings}>
            {safeCards.map((card) => (
              <div key={card.id || card._id} className="px-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,140,255,0.25)] hover:shadow-[0_0_25px_rgba(0,195,255,0.55)] border border-cyan-500/20 group"
                >
                  {/* Card Image */}
                  <div className="h-[420px] w-full overflow-hidden">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  {/* Card Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                    <h3
                      className={`text-2xl font-bold text-white mb-2 tracking-wider group-hover:text-cyan-300 transition-colors duration-300 ${michroma.className}`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Glow sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/5 animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

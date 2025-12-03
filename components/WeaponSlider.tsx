// components/WeaponsSlider.tsx
"use client";

import CardSlider from "./CardSlider";

const weapons = [
  {
    id: "1",
    title: "VX-9 PLASMA RIFLE",
    description: "High-energy assault weapon with overcharge burst and zero recoil stabilization.",
    imageUrl:
      "https://images.unsplash.com/photo-1603349206295-dde20617a8f6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "ION LANCE MK-II",
    description: "Precision long-range rail weapon capable of piercing armored exo frames.",
    imageUrl:
      "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "ARC BLADE Θ",
    description: "Close-quarters mono-edged blade wrapped in electrified plasma field.",
    imageUrl:
      "https://images.unsplash.com/photo-1604079628040-94301bb21b11?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "QUANTUM GRENADE ARRAY",
    description: "Cluster ordnance that fractures local spacetime and destabilizes enemy tech.",
    imageUrl:
      "https://images.unsplash.com/photo-1526418471061-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function WeaponsSlider() {
  return <CardSlider title="WEAPONS" cards={weapons} />;
}

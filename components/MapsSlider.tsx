// components/MapsSlider.tsx
"use client";

import CardSlider from "./CardSlider";

const maps = [
  {
    id: "1",
    title: "NEON DISTRICT",
    description: "Tight cyber-city corridors with vertical rooftops and ambush lanes.",
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "OMEGA OUTPOST",
    description: "Arctic research facility surrounded by frozen wreckage and long sightlines.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "SKYLINE RELIC",
    description: "Ruined megastructures floating above the clouds with narrow bridges.",
    imageUrl:
      "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "CORE LABS",
    description: "Underground lab complex with tight interior firefights and flanking tunnels.",
    imageUrl:
      "https://images.unsplash.com/photo-1533108980454-16dc3f07b0e0?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function MapsSlider() {
  return <CardSlider title="MAPS" cards={maps} />;
}

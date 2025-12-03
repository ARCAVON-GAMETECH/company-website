// components/MapsSlider.tsx
"use client";

import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

export default function MapsSlider() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    async function fetchMaps() {
      try {
        const res = await fetch("/api/cards?category=map");
        const data = await res.json();
        if (Array.isArray(data)) {
          setMaps(data);
        } else {
          console.error("Maps API returned non-array:", data);
          setMaps([]);
        }
      } catch (error) {
        console.error("Failed to fetch maps:", error);
      }
    }

    fetchMaps();
  }, []);

  return <CardSlider title="MAPS" cards={maps} />;
}

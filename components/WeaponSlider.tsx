// components/WeaponsSlider.tsx
"use client";

import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

export default function WeaponsSlider() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function fetchWeapons() {
      try {
        const res = await fetch("/api/cards?category=weapon");
        const data = await res.json();
        if (Array.isArray(data)) {
          setWeapons(data);
        } else {
          console.error("Weapons API returned non-array:", data);
          setWeapons([]);
        }
      } catch (error) {
        console.error("Failed to fetch weapons:", error);
      }
    }

    fetchWeapons();
  }, []);

  return <CardSlider title="WEAPONS" cards={weapons} />;
}

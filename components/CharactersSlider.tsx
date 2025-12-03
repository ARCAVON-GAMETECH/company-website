"use client";

import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

export default function CharactersSlider() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch("/api/cards?category=characters");
      const data = await res.json();
      console.log("Fetched cards:", data); // TEMP DEBUG
      setCharacters(data);
    }

    fetchCharacters();
  }, []);

  return <CardSlider title="CHARACTERS" cards={characters} />;
}

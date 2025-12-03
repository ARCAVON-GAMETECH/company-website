"use client";

import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

export default function CharactersSlider() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch("/api/cards?category=characters");
      const data = await res.json();
      console.log("Fetched characters:", data);
      if (Array.isArray(data)) {
        setCharacters(data);
      } else {
        console.error("Characters API returned non-array:", data);
        setCharacters([]);
      }
    }

    fetchCharacters();
  }, []);

  return <CardSlider title="CHARACTERS" cards={characters} />;
}

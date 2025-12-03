// app/page.tsx
import Hero from "@/components/Hero";
import CharactersSlider from "@/components/CharactersSlider";
import WeaponsSlider from "@/components/WeaponSlider";
import MapsSlider from "@/components/MapsSlider";
import Navbar from "@/components/Navbar";


export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />

      <section id="characters">
        <CharactersSlider />
      </section>

      <section id="weapons">
        <WeaponsSlider />
      </section>

      <section id="maps">
        <MapsSlider />
      </section>
      
    </main>
  );
}

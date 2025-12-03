import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Character from "@/models/Character";
import Map from "@/models/Map";
import Weapon from "@/models/Weapon";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        // Clear existing data (optional, but good for seeding)
        await Character.deleteMany({});
        await Map.deleteMany({});
        await Weapon.deleteMany({});

        // Seed Characters
        await Character.create([
            {
                title: "TITAN OMEGA",
                description: "Heavy tank-class exosuit designed to soak damage and anchor the frontline.",
                imageUrl: "/images/charatcers/Character1.png",
                category: "character",
            },
            {
                title: "VORTEX STRIKER",
                description: "Agile assault unit capable of rapid flanking and high-burst damage.",
                imageUrl: "/images/charatcers/Character2.png",
                category: "character",
            },
            {
                title: "PHANTOM RECON",
                description: "Stealth specialist equipped with cloaking tech and long-range optics.",
                imageUrl: "/images/charatcers/Character3.png",
                category: "character",
            },
        ]);

        // Seed Maps
        await Map.create([
            {
                title: "NEON DISTRICT",
                description: "Tight cyber-city corridors with vertical rooftops and ambush lanes.",
                imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
                category: "map",
            },
            {
                title: "OMEGA OUTPOST",
                description: "Arctic research facility surrounded by frozen wreckage and long sightlines.",
                imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
                category: "map",
            },
            {
                title: "SKYLINE RELIC",
                description: "Ruined megastructures floating above the clouds with narrow bridges.",
                imageUrl: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1000&auto=format&fit=crop",
                category: "map",
            },
            {
                title: "CORE LABS",
                description: "Underground lab complex with tight interior firefights and flanking tunnels.",
                imageUrl: "https://images.unsplash.com/photo-1533108980454-16dc3f07b0e0?q=80&w=1000&auto=format&fit=crop",
                category: "map",
            },
        ]);

        // Seed Weapons
        await Weapon.create([
            {
                title: "VX-9 PLASMA RIFLE",
                description: "High-energy assault weapon with overcharge burst and zero recoil stabilization.",
                imageUrl: "/images/weapons/Weapion 1.png",
                category: "weapon",
            },
            {
                title: "ION LANCE MK-II",
                description: "Precision long-range rail weapon capable of piercing armored exo frames.",
                imageUrl: "/images/weapons/Weapon 2.png",
                category: "weapon",
            },
            {
                title: "ARC BLADE Θ",
                description: "Close-quarters mono-edged blade wrapped in electrified plasma field.",
                imageUrl: "/images/weapons/weapon 3.png",
                category: "weapon",
            },
        ]);

        return NextResponse.json({ message: "Database seeded successfully" });
    } catch (error) {
        console.error("Seeding error:", error);
        return NextResponse.json({ message: "Seeding failed", error }, { status: 500 });
    }
}

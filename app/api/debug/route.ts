import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Character from "@/models/Character";
import Map from "@/models/Map";
import Weapon from "@/models/Weapon";

export async function GET() {
    try {
        await connectDB();
        const charCount = await Character.countDocuments();
        const mapCount = await Map.countDocuments();
        const weaponCount = await Weapon.countDocuments();

        return NextResponse.json({
            characters: charCount,
            maps: mapCount,
            weapons: weaponCount,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

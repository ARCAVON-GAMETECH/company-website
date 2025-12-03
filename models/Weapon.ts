import { Schema, model, models } from "mongoose";

const WeaponSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        category: { type: String, default: "weapon" },
    },
    { timestamps: true }
);

const Weapon = models.Weapon || model("Weapon", WeaponSchema);
export default Weapon;

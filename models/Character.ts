import { Schema, model, models } from "mongoose";

const CharacterSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        category: { type: String, default: "character" },
    },
    { timestamps: true }
);

const Character = models.Character || model("Character", CharacterSchema);
export default Character;

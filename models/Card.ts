// models/Card.ts
import { Schema, model, models } from "mongoose";

const CardSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["character", "weapon", "map"],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Card = models.Card || model("Card", CardSchema);
export default Card;

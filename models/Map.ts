import { Schema, model, models } from "mongoose";

const MapSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        category: { type: String, default: "map" },
    },
    { timestamps: true }
);

const Map = models.Map || model("Map", MapSchema);
export default Map;

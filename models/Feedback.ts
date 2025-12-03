// models/Feedback.ts
import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);
export default Feedback;

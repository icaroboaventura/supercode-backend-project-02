import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    questions: [{ type: String }],
  },
  { collection: "quizzes", timestamps: true }
);

export const Quiz = mongoose.model("Quiz", quizSchema);

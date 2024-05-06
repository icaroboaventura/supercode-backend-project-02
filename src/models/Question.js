import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    description: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswers: [{ type: String, required: true }],
  },
  { collection: "questions", timestamps: true }
);

export const Question = mongoose.model("Question", questionSchema);

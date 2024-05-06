import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    selectedOptions: [{ type: String, required: true }],
    correctOptions: [{ type: String, required: true }],
  },
  { collection: "answers", timestamps: true }
);

export const Answer = mongoose.model("Answer", answerSchema);

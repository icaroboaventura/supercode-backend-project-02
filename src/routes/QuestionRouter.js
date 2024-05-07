import express from "express";
import { QuestionController } from "../controllers/QuestionController.js";

export const QuestionRouter = express.Router().get("/", QuestionController.getAllQuestionsCtrl).post("/", QuestionController.createQuestionToQuizCtrl).delete("/:questionId", QuestionController.deleteQuestionCtrl);

import express from "express";
import { QuizController } from "../controllers/QuizController.js";

export const QuizRouter = express.Router().get("/", QuizController.getAllQuizzesCtrl).post("/", QuizController.createQuizCtrl);

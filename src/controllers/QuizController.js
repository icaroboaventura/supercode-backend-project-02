import { QuizService } from "../services/QuizService.js";

async function getAllQuizzesCtrl(req, res) {
  try {
    const quizzes = await QuizService.getAllQuizzes();
    res.json(quizzes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find all quizs" });
  }
}

async function createQuizCtrl(req, res) {
  try {
    const newQuiz = req.body;
    const addedQuiz = await QuizService.createQuiz(newQuiz);
    res.json(addedQuiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new Quiz" });
  }
}

export const QuizController = {
  getAllQuizzesCtrl,
  createQuizCtrl,
};

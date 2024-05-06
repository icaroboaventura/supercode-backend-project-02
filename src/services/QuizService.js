import { Quiz } from "../models/Quiz.js";

// Service functions for Quiz entity

// Get all Quizs
async function getAllQuizzes() {
  const quizzes = await Quiz.find({});
  return quizzes;
}

// Create new Quiz
async function createQuiz(QuizData) {
  const foundQuiz = await Quiz.findOne({ title: QuizData.title });
  if (foundQuiz) {
    throw new Error("Quiz with this name already exists");
  }
  return Quiz.create(QuizData);
}

export const QuizService = {
  getAllQuizzes,
  createQuiz,
};

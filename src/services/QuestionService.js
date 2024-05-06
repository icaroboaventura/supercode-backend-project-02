import { Quiz } from "../models/Quiz.js";
import { Question } from "../models/question.js";

// Get all questions
async function getAllQuestions() {
  try {
    return await Question.find({});
  } catch (err) {
    throw new Error(err.message);
  }
}

// Create question to quiz
async function createQuestionToQuiz(questionInfo, quizId) {
  try {
    const foundQuiz = await Quiz.findById(quizId);
    if (!foundQuiz) throw new Error("Quiz with this id doesn't exist");
    const createdQuestion = await Question.create({ ...questionInfo, quizId });
    foundQuiz.questions.push(createdQuestion._id);
    await foundQuiz.save();
    return createdQuestion;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const QuestionService = {
  getAllQuestions,
  createQuestionToQuiz,
};

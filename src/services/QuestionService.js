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
    // Find the quiz by its ID
    const foundQuiz = await Quiz.findById(quizId);
    // Check if the quiz exists
    if (!foundQuiz) {
      throw new Error("Quiz with this ID doesn't exist");
    }
    // Create a new question and associate it with the quiz
    const createdQuestion = await Question.create({ ...questionInfo, quizId });
    // Add the newly created question to the quiz's list of questions
    foundQuiz.questions.push(createdQuestion._id);
    // Save the updated quiz
    await foundQuiz.save();
    // Return the created question
    return createdQuestion;
  } catch (err) {
    // If an error occurs, throw a new error with the error message
    throw new Error(err.message);
  }
}

async function deleteQuestion(questionId) {
  try {
    // Find the question to delete
    const foundQuestionDelete = await Question.findByIdAndDelete(questionId);
    // If the question doesn't exist, throw an error
    if (!foundQuestionDelete) {
      throw new Error("Question with this ID doesn't exist");
    }
    // Find the quizzes that contain the question
    const quizzesContainingQuestion = await Quiz.find({ questions: questionId });
    // Update each quiz to remove the deleted question
    await Promise.all(
      quizzesContainingQuestion.map(async (quiz) => {
        quiz.questions = quiz.questions.filter((qId) => qId.toString() !== questionId);
        await quiz.save();
      })
    );
    // Return the deleted question
    return foundQuestionDelete;
  } catch (err) {
    // If an error occurs, throw a new error with the error message
    throw new Error(err.message);
  }
}

export const QuestionService = {
  getAllQuestions,
  createQuestionToQuiz,
  deleteQuestion,
};

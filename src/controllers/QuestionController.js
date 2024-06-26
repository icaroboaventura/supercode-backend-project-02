import { QuestionService } from "../services/QuestionService.js";

async function getAllQuestionsCtrl(req, res) {
  try {
    const questions = await QuestionService.getAllQuestions();
    res.json(questions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find all questions" });
  }
}

async function createQuestionToQuizCtrl(req, res) {
  try {
    const questionInfo = req.body;
    const quizId = req.body.quizId;
    const addedQuestion = await QuestionService.createQuestionToQuiz(questionInfo, quizId);
    res.json(addedQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new question" });
  }
}

async function deleteQuestionCtrl(req, res) {
  try {
    const questionId = req.params.questionId;
    console.log(questionId);
    const deletedQuestion = await QuestionService.deleteQuestion(questionId);
    res.json(deletedQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new recipe" });
  }
}

export const QuestionController = {
  getAllQuestionsCtrl,
  createQuestionToQuizCtrl,
  deleteQuestionCtrl,
};

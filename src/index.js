import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";
import { QuestionRouter } from "./routes/QuestionRouter.js";
import { QuizRouter } from "./routes/QuizRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/quizzes", QuizRouter);
app.use("/api/v1/questions", QuestionRouter);

try {
  await connectToDatabase();
  const PORT = 777;
  app.listen(PORT, () => console.log("Server listening at port", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}

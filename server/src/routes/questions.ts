import * as express from 'express';
import questionService from '../services/questions';

const questionsRouter = express.Router();

questionsRouter.get('/', (_req, res) => {
  const questions = questionService.getQuestions();

  res.send(questions);
});

export default questionsRouter;

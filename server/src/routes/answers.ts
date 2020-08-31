import * as express from 'express';
import answerService from '../services/answers';

const answersRouter = express.Router();

answersRouter.get('/', (_req, res) => {
  const answers = answerService.getAnonymousAnswers();

  res.send(answers);
});

answersRouter.post('/', (req, res) => {
  console.log('hello answers');

  console.log(req.body);
  try {
    const answers = answerService.saveAnswers(req.body);

    res.send(answers);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

export default answersRouter;

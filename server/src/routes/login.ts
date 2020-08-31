import * as express from 'express';
import answerService from '../services/answers';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const answers = answerService.getAnswersByUserId('1');

    answers ? res.send(answers) : res.send({ userId: '1', answers: [] });
  } else {
    res.sendStatus(401);
  }
});

export default loginRouter;

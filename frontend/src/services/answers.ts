import axios from 'axios';
import { MyAnswers } from '../state/state';

const fetchAnswers = async () => {
  return await axios.get('http://localhost:8081/answers');
};

const sendAnswers = async (userId: string, myAnswers: MyAnswers) => {
  const answers = Object.keys(myAnswers).map((q) => ({
    questionId: q,
    choice: myAnswers[q].choice
  }));

  const answersObject = {
    userId,
    answers
  };

  return await axios.post('http://localhost:8081/answers', answersObject);
};

export default { fetchAnswers, sendAnswers };

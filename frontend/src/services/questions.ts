import axios from 'axios';
import { Question } from '../../../common/src/interfaces';

const baseUrl = 'http://localhost:8081/questions';

const fetchQuestions = async () => {
  const { data: questions } = await axios.get<Question[]>(baseUrl);

  return questions;
};

export default { fetchQuestions };

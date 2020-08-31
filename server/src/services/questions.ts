import { questions } from '../../../common/src/questions';
import { Question } from '../../../common/src/interfaces';

const getQuestions = (): Question[] => {
  return questions;
};

const findQuestionById = (id: string): Question | undefined => {
  return questions.find((q) => q.id === id);
};

export default { getQuestions, findQuestionById };

import { answersData } from '../../../common/src/answers';
import { Answers, AnonymousAnswers } from '../../../common/src/interfaces';
import { parseAnswers } from '../utils';

const getAnswers = (): Answers[] => {
  return answersData;
};

const getAnonymousAnswers = (): AnonymousAnswers => {
  return answersData.map((a) => a.answers).flat();
};

const getAnswersByUserId = (userId: string): Answers | undefined => {
  return answersData.find((answers) => answers.userId === userId);
};

const saveAnswers = (object: unknown): Answers | undefined => {
  const newAnswers = parseAnswers(object);

  const indexOfUserAnswers = answersData.findIndex(
    (a) => a.userId === newAnswers.userId
  );

  indexOfUserAnswers < 0
    ? answersData.push(newAnswers)
    : answersData.splice(indexOfUserAnswers, 1, newAnswers);

  return newAnswers;
};

export default {
  getAnswers,
  getAnonymousAnswers,
  getAnswersByUserId,
  saveAnswers
};

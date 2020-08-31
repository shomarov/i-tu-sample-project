import {
  Question,
  Answers,
  AnonymousAnswers,
  ChoiceValue,
  SingleAnswer
} from '../../../common/src/interfaces';
import { MyAnswers, Answer, Statistics, Credentials } from './state';
import { Action } from './reducer';

export const setQuestions = (data: Question[]): Action => {
  return {
    type: 'SET_QUESTIONS',
    payload: data
  };
};

export const setMyAnswers = (data: Answers): Action => {
  const myAnswers: MyAnswers = {};

  data.answers.forEach((answer: SingleAnswer) => {
    myAnswers[answer.questionId] = {
      questionId: answer.questionId,
      choice: answer.choice
    };
  });

  return {
    type: 'SET_MY_ANSWERS',
    payload: data.answers.length && data.answers.length !== 0 ? myAnswers : null
  };
};

export const clearMyAnswers = (): Action => {
  return {
    type: 'CLEAR_MY_ANSWERS',
    payload: null
  };
};

export const setStatistics = (answers: AnonymousAnswers): Action => {
  const statistics: Statistics = answers.reduce<Statistics>((acc, answer) => {
    const oldValue = acc[answer.questionId]
      ? acc[answer.questionId][answer.choice]
      : 0;

    const newValue = oldValue ? oldValue + 1 : 1;

    return {
      ...acc,
      [answer.questionId]: {
        ...acc[answer.questionId],
        [answer.choice]: newValue
      }
    };
  }, {});

  console.log('statistics', statistics);

  return {
    type: 'SET_STATISTICS',
    payload: statistics
  };
};

export const setAnswer = (answer: Answer): Action => {
  return {
    type: 'SET_ANSWER',
    payload: answer
  };
};

export const sendAnswers = (myAnswers: Answers): Action => {
  return {
    type: 'SUBMIT_ANSWERS',
    payload: myAnswers
  };
};

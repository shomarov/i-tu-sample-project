import {
  Answers,
  SingleAnswer,
  ChoiceValue
} from '../../common/src/interfaces';

const parseAnswers = (param: unknown): Answers => {
  if (!param || !isAnswersObject(param)) {
    throw new Error('invalid or missing answers asd');
  }

  return {
    userId: parseId(param.userId),
    answers: parseAnswersArray(param.answers)
  };
};

const isAnswersObject = (param: unknown): param is Answers => {
  return (
    typeof param === 'object' &&
    param !== null &&
    'userId' in param &&
    'answers' in param
  );
};

const parseAnswersArray = (param: unknown): SingleAnswer[] => {
  if (!param || !isAnswersArray(param)) {
    throw new Error('invalid or missing answers asd');
  }

  return param.map((answer) => parseAnswer(answer));
};

const isAnswersArray = (param: unknown): param is SingleAnswer[] => {
  return Array.isArray(param) && param.every((element) => isAnswer(element));
};

const parseAnswer = (param: unknown): SingleAnswer => {
  if (!param || !isAnswer(param)) {
    throw new Error('invalid or missing answer');
  }

  return {
    questionId: parseQuestionId(param.questionId),
    choice: parseChoice(param.choice)
  };
};

const parseId = (param: unknown): string => {
  if (!param || !isString(param)) {
    throw new Error('invalid or missing userId');
  }

  return param;
};

const parseQuestionId = (param: unknown): string => {
  if (!param || !isString(param)) {
    throw new Error('invalid or missing questionId');
  }

  return param;
};

const parseChoice = (param: unknown): number => {
  if (!param || !isNumber(param) || !isChoice(param)) {
    throw new Error('invalid or missing answer choice');
  }

  return param;
};

const isAnswer = (param: unknown): param is SingleAnswer => {
  return (
    typeof param === 'object' &&
    param !== null &&
    'questionId' in param &&
    'choice' in param
  );
};

const isChoice = (param: number): param is ChoiceValue => {
  return param >= 1 && param <= 5;
};

const isString = (param: unknown): param is string => {
  return typeof param === 'string' || param instanceof String;
};

const isNumber = (param: unknown): param is number => {
  return Number.isInteger(Number(param));
};

export { parseAnswers };

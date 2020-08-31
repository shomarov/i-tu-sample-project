import { State } from './state';
import { Question, Answers } from '../../../common/src/interfaces';
import { MyAnswers, Answer, Statistics } from './state';

export type Action =
  | {
      type: 'SET_QUESTIONS';
      payload: Question[];
    }
  | {
      type: 'SET_MY_ANSWERS';
      payload: MyAnswers | null;
    }
  | {
      type: 'CLEAR_MY_ANSWERS';
      payload: null;
    }
  | {
      type: 'SET_STATISTICS';
      payload: Statistics;
    }
  | {
      type: 'SET_ANSWER';
      payload: Answer;
    }
  | {
      type: 'SUBMIT_ANSWERS';
      payload: Answers;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
        answers: action.payload.reduce((acc, question) => {
          return {
            ...acc,
            [question.id]: { questionId: question.id, choice: undefined }
          };
        }, {})
      };
    case 'SET_MY_ANSWERS':
      return {
        ...state,
        answers: action.payload ? action.payload : state.answers
      };
    case 'CLEAR_MY_ANSWERS':
      return {
        ...state,
        answers: state.questions.reduce((acc, question) => {
          return {
            ...acc,
            [question.id]: { questionId: question.id, choice: undefined }
          };
        }, {})
      };
    case 'SET_STATISTICS':
      return {
        ...state,
        statistics: action.payload
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload
        }
      };
    default:
      return state;
  }
};

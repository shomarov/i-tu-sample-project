export interface HelloWorldMessage {
  message: string;
}

export interface User {
  userId: string;
  username: string;
  password: string;
}

export enum ChoiceValue {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5
}

export interface QuestionChoice {
  label: string;
  value: ChoiceValue;
}

export interface Question {
  id: string;
  label: string;
  choices: QuestionChoice[];
}

export interface SingleAnswer {
  questionId: string;
  choice: ChoiceValue;
}

export interface Answers {
  userId: string;
  answers: SingleAnswer[];
}

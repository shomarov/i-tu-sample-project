export interface HelloWorldMessage {
  message: string;
}

type QuestionChoice = {
  label: string;
  value: 1 | 2 | 3 | 4 | 5;
};

export type Question = {
  label: string;
  choices: QuestionChoice[];
};

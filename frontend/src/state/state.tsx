import React, { createContext, useReducer, useContext } from 'react';
import { Question, User, ChoiceValue } from '../../../common/src/interfaces';
import { Action } from './reducer';

export interface Credentials {
  username: string;
  password: string;
}

export type Answer = { questionId: string; choice?: ChoiceValue };

export type MyAnswers = { [questionId: string]: Answer };

export type Statistics = { [questionId: string]: { [choice: number]: number } };

export interface State {
  currentUser: User;
  questions: Question[];
  answers: MyAnswers;
  statistics: Statistics;
}

const initialState: State = {
  currentUser: { userId: '1', username: 'user', password: 'password' },
  questions: [],
  answers: {},
  statistics: {}
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);

interface StateProviderProps {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
}

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

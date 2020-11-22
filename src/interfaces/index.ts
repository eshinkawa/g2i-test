import { ReactNode } from 'react';

export interface IContextProviderProps {
  defaults?: Partial<IData>;
  children?: ReactNode;
}

export interface IData {
  isLoading: boolean;
  quizList: IResult[];
  currentQuestion: Number;
  setCurrentQuestion: Function;
  score: Number;
  setScore: Function;
}

export interface IWelcome {
  response_code: number;
  results: IResult[];
}

export interface IResult {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: CorrectAnswer;
  incorrect_answers: CorrectAnswer[];
}

export enum CorrectAnswer {
  False = 'False',
  True = 'True',
}

export enum Difficulty {
  Hard = 'hard',
}

export enum Type {
  Boolean = 'boolean',
}

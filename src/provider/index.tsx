import React, { ReactElement, createContext, useState, useEffect } from 'react';
import { BackendAPI } from '../services/api';
import {
  IContextProviderProps,
  IData,
  IResult,
  IScore,
  IWelcome,
} from '../interfaces';

const defaultData: IData = {
  isLoading: false,
  quizList: [],
  currentQuestion: 0,
  setCurrentQuestion: (): void => {},
  score: 0,
  setScore: (): void => {},
  scoreList: [],
  addToScore: (): void => {},
  setIsLoading: (): void => {},
  setScoreList: (): void => {},
};

export const ContextProvider = (props: IContextProviderProps): ReactElement => {
  const apiService = new BackendAPI();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<IResult[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Number>(0);
  const [score, setScore] = useState<number>(0);
  const [scoreList, setScoreList] = useState<IScore[]>([]);

  useEffect(() => {
    apiService.getList(onGetQuizList);
  }, [isLoading]);

  function onGetQuizList(error: any, data: IWelcome) {
    if (!error) {
      setQuizList(data.results);
      setIsLoading(false);
    }
  }

  function addToScore(score: IScore) {
    scoreList.push(score);
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        quizList,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        scoreList,
        addToScore,
        setIsLoading,
        setScoreList,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext(defaultData);

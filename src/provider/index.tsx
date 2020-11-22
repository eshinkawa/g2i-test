import React, { ReactElement, createContext, useState, useEffect } from 'react';
import { BackendAPI } from '../services/api';
import { IContextProviderProps, IData, IResult, IWelcome } from '../interfaces';

const defaultData: IData = {
  isLoading: false,
  quizList: [],
  currentQuestion: 0,
  setCurrentQuestion: (): void => {},
  score: 0,
  setScore: (): void => {},
};

export const ContextProvider = (props: IContextProviderProps): ReactElement => {
  const apiService = new BackendAPI();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<IResult[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    apiService.getList(onGetQuizList);
  }, []);

  function onGetQuizList(error: any, data: IWelcome) {
    if (!error) {
      setQuizList(data.results);
    }
    setIsLoading(false);
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext(defaultData);

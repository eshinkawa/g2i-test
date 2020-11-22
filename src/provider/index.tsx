import React, { ReactElement, ReactNode, createContext, useState, useEffect } from "react";
import { BackendAPI } from "../services/api";
import { IContextProviderProps, IData, IResult, IWelcome } from "../interfaces"

const defaultData: IData = {
  isLoading: false,
  getQuizList: (): void => { },
  quizList: [],
};

export const ContextProvider = (props: IContextProviderProps): ReactElement => {
  const apiService = new BackendAPI();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<Partial<IResult[]>>();

  useEffect(() => {
    setIsLoading(true)
    apiService.getProductsList(onGetProductsList)
    console.log(quizList)
  }, [])

  function onGetProductsList(error: any, data: IResult[]) {
    if (!error) {
      setQuizList(data);
    }
    setIsLoading(false)
  }

  function getList(param: string) {
    setIsLoading(true)
    apiService.getProductsList(onGetProductsList, param);
  }

  return (
    <DataContext.Provider value={{ isLoading, setIsLoading, quizList, getList }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext(defaultData);

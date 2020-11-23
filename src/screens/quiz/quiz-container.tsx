import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { DataContext } from '../../provider';
import { IResult } from '../../interfaces';
import QuizPresenter from './quiz-presenter';

export default function QuizContainer() {
  const {
    quizList,
    currentQuestion,
    setCurrentQuestion,
    addToScore,
  } = useContext(DataContext);
  const navigation = useNavigation();

  const assessAnswer = (question: IResult, answer: boolean) => {
    addToScore({
      question: question.question,
      got_it_right:
        question.correct_answer.toUpperCase() ===
        answer.toString().toUpperCase(),
    });
  };

  const handleQuestion = (question: IResult, answer: boolean) => {
    assessAnswer(question, answer);
    if (quizList.length === currentQuestion + 1) {
      navigation.push('Score');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <QuizPresenter
      quizList={quizList}
      handleQuestion={handleQuestion}
      currentQuestion={currentQuestion}
    />
  );
}

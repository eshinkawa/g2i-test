import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../provider';
import ScorePresenter from './score-presenter';

export default function ScoreContainer() {
  const {
    scoreList,
    setIsLoading,
    setCurrentQuestion,
    setScoreList,
  } = useContext(DataContext);
  const navigation = useNavigation();

  const countCorrectAnswers = scoreList.filter((item) => item.got_it_right)
    .length;

  const playAgain = () => {
    setIsLoading(true);
    setCurrentQuestion(0);
    setScoreList([]);
    navigation.push('Welcome');
  };

  return (
    <ScorePresenter
      scoreList={scoreList}
      playAgain={playAgain}
      countCorrectAnswers={countCorrectAnswers}
    />
  );
}

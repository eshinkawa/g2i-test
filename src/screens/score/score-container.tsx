import React, { useContext } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DataContext } from '../../provider';
import ScorePresenter from './score-presenter';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';

export default function ScoreContainer() {
  const {
    scoreList,
    setIsLoading,
    setCurrentQuestion,
    setScoreList,
  } = useContext(DataContext);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

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

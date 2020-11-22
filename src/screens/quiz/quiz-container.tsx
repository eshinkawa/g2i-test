import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DataContext } from '../../provider';
import { SafeAreaContainer } from '../../styles/base';

export default function QuizContainer() {
  const { quizList, currentQuestion, setCurrentQuestion } = useContext(
    DataContext,
  );
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <View>
        <Text>{quizList.length > 0 && quizList[currentQuestion].question}</Text>
        <Button
          onPress={() => navigation.push('ScoreContainer')}
          title={'Next Question'}
        />
      </View>
    </SafeAreaContainer>
  );
}

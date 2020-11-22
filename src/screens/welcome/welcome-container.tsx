import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, Image } from 'react-native';
import { SafeAreaContainer, ScreenWidth } from '../../styles/base';
import styled from 'styled-components/native';
import logo from '../../../assets/quiz.png';

const TopText = styled.Text`
  color: #d0e1f9;
  font-size: 36px;
  margin-bottom: 24px;
`;

const MiddleText = styled.Text`
  color: #c6c6c6;
  font-size: 24px;
`;

export default function WelcomeContainer() {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer bgColor={'#283655'}>
      <Image
        source={logo}
        style={{ width: ScreenWidth * 0.7, height: ScreenWidth * 0.7 }}
      />
      <TopText>Welcome to the Trivia Challenge</TopText>
      <MiddleText>
        You will be presented with 10 True of False questions.
      </MiddleText>
      <Text>Can you score 100%?</Text>
      <Button
        onPress={() => navigation.push('QuizContainer')}
        title={'BEGIN'}
      />
    </SafeAreaContainer>
  );
}

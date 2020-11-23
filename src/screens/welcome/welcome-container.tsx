import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, Image, TouchableOpacity } from 'react-native';
import {
  Colors,
  FontSize,
  SafeAreaContainer,
  ScreenWidth,
  Spacing,
} from '../../styles/base';
import styled from 'styled-components/native';
import logo from '../../../assets/quiz.png';
import CustomButton from '../../components/button';
import { useFonts } from '@expo-google-fonts/open-sans';

const TopText = styled.Text`
  color: #d0e1f9;
  font-size: ${FontSize.XXLarge}px;
  margin: ${Spacing.Medium}px;
  margin-top: ${Spacing.Medium}px;
  margin-bottom: ${Spacing.XSmall}px;
  text-align: center;
  font-family: OpenSans-Regular;
`;

const MiddleText = styled.Text`
  color: #c6c6c6;
  margin: ${Spacing.Medium}px;
  font-size: ${FontSize.Large}px;
  margin-bottom: 48px;
  text-align: center;
  font-family: OpenSans-Regular;
`;

const BottomText = styled.Text`
  color: #c6c6c6;
  font-size: ${FontSize.XLarge}px;
  margin-bottom: ${Spacing.Medium}px;
  font-family: OpenSans-Regular;
`;

export default function WelcomeContainer() {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer bgColor={'#283655'}>
      <Image
        source={logo}
        style={{ width: ScreenWidth * 0.5, height: ScreenWidth * 0.5 }}
      />
      <TopText>Welcome to the Trivia Challenge</TopText>
      <MiddleText>
        You will be presented with 10 True of False questions.
      </MiddleText>
      <BottomText>Can you score 100%?</BottomText>
      <CustomButton
        onPress={() => navigation.push('QuizContainer')}
        title={'BEGIN'}
        bgColor={Colors.actionBlue}
      />
    </SafeAreaContainer>
  );
}

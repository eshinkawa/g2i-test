import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
import {
  Colors,
  FontSize,
  SafeAreaContainer,
  ScreenWidth,
  Spacing,
} from '../../styles/base';
import logo from '../../../assets/question.png';
import CustomButton from '../../components/button';
import { IQuiz } from '../../interfaces';

const CategoryText = styled.Text`
  color: #fff;
  margin: ${Spacing.Medium}px;
  font-size: ${FontSize.Medium}px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  font-family: OpenSans-Bold;
`;

const QuestionText = styled.Text`
  color: #c6c6c6;
  margin: ${Spacing.Medium}px;
  font-size: ${FontSize.Large}px;
  margin-bottom: 24px;
  text-align: center;
  font-family: OpenSans-Regular;
`;

const CountText = styled.Text`
  color: #fff;
  margin: ${Spacing.Medium}px;
  font-size: ${FontSize.Large}px;
  text-align: center;
  margin-bottom: 48px;
  font-family: OpenSans-SemiBold;
`;

export default function QuizPresenter({
  quizList,
  handleQuestion,
  currentQuestion,
}: IQuiz) {
  return (
    <SafeAreaContainer bgColor={'#1e1f26'}>
      <Image
        source={logo}
        style={{
          width: ScreenWidth * 0.25,
          height: ScreenWidth * 0.25,
          marginBottom: 12,
        }}
      />
      <CategoryText>
        {quizList.length > 0 ? quizList[currentQuestion].category : null}
      </CategoryText>

      <QuestionText>
        {quizList.length > 0 ? quizList[currentQuestion].question : null}
      </QuestionText>

      <CountText>
        {currentQuestion + 1} of {quizList.length}
      </CountText>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'flex-end',
          marginBottom: 64,
        }}
      >
        <CustomButton
          onPress={() => handleQuestion(quizList[currentQuestion], true)}
          title={'TRUE'}
          bgColor={Colors.actionBlue}
        />

        <CustomButton
          onPress={() => handleQuestion(quizList[currentQuestion], false)}
          title={'FALSE'}
          bgColor={Colors.actionRed}
        />
      </View>
    </SafeAreaContainer>
  );
}

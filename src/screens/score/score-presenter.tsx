import React from 'react';
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { Colors, FontSize, ScreenWidth, Spacing } from '../../styles/base';
import logo from '../../../assets/resume.png';
import styled from 'styled-components/native';
import { IScore, IScorePresenter } from '../../interfaces';
import CustomButton from '../../components/button';

const Title = styled.Text`
  color: #fff;
  margin: ${Spacing.Medium}px;
  font-size: ${FontSize.XXLarge}px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
  font-family: OpenSans-Bold;
`;

const Question = styled.Text`
  align-self: center;
  justify-content: center;
  color: ${Colors.whiteGrey};
  margin: ${Spacing.Small}px;
  font-size: ${FontSize.Medium}px;
  font-family: OpenSans-SemiBold;
  flex: 8.5;
`;

const QuestionRow = styled.View`
  flex-direction: row;
  background-color: #cd5c5c;
  border-radius: 8px;
  margin-horizontal: 16px;
  margin-vertical: 6px;
  padding-vertical: 8px;
  flex: 1;
  ${(props) => {
    if (props.got_it_right)
      return `
        background-color: #043927;
    `;
  }}
`;

const EmojiContainer = styled.View`
  align-self: center;
  justify-content: center;
  flex: 1.5;
`;

export default function ScorePresenter({
  scoreList,
  playAgain,
  countCorrectAnswers,
}: IScorePresenter) {
  const Row = ({ got_it_right, question }: IScore) => {
    return (
      <QuestionRow got_it_right={got_it_right}>
        <EmojiContainer>
          <Text style={{ textAlign: 'center' }}>
            {got_it_right ? '✅' : '❌'}
          </Text>
        </EmojiContainer>
        <Question>{question}</Question>
      </QuestionRow>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#1e1f26' }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={logo}
            style={{
              width: ScreenWidth * 0.4,
              height: ScreenWidth * 0.4,
              marginTop: 48,
            }}
          />
          <Title>You scored {countCorrectAnswers}/10</Title>
          {scoreList.map((item: IScore, index) => (
            <Row
              got_it_right={item.got_it_right}
              question={item.question}
              key={index}
            />
          ))}
          <CustomButton
            onPress={playAgain}
            title={'PLAY AGAIN'}
            bgColor={Colors.actionBlue}
            customStyles={{ marginVertical: 16 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

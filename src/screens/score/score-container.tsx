import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  Colors,
  FontSize,
  SafeAreaContainer,
  ScreenWidth,
  Spacing,
} from '../../styles/base';
import { DataContext } from '../../provider';
import logo from '../../../assets/resume.png';
import styled from 'styled-components/native';
import { IScore } from '../../interfaces';
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

const Questions = styled.Text`
  color: ${Colors.lightGrey};
  margin: ${Spacing.Small}px;
  font-size: ${FontSize.Medium}px;
  font-family: OpenSans-SemiBold;
`;

const QuestionRow = styled.View`
  flex-direction: row;
  background-color: ${Colors.black};
  padding-horizontal: 18px;
  padding-vertical: 4px;
  margin-vertical: 6px;
  margin-horizontal: 24px;
  border-radius: 8px;
`;

const EmojiContainer = styled.View`
  align-self: center;
  justify-content: center;
  margin-right: 6px;
`;

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

  const Row = ({ gotItRight, question }) => {
    return (
      <QuestionRow>
        <EmojiContainer>
          <Text>{gotItRight ? '✅' : '❌'}</Text>
        </EmojiContainer>
        <Questions>{question}</Questions>
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
        <Image
          source={logo}
          style={{
            width: ScreenWidth * 0.3,
            height: ScreenWidth * 0.3,
            marginTop: 48,
            marginBottom: 12,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>You scored {countCorrectAnswers}/10</Title>
          {scoreList.map((item: IScore, index) => (
            <Row
              gotItRight={item.got_it_right}
              question={item.question}
              key={index}
            />
          ))}
          <CustomButton
            onPress={() => {
              setIsLoading(true);
              setCurrentQuestion(0);
              setScoreList([]);
              navigation.push('WelcomeContainer');
            }}
            title={'PLAY AGAIN'}
            bgColor={Colors.actionBlue}
            customStyles={{ marginVertical: 16 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

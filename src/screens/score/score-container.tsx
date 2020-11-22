import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { SafeAreaCenteredContainer } from '../../styles/base';

export default function ScoreContainer() {
  const navigation = useNavigation();

  return (
    <SafeAreaCenteredContainer>
      <View>
        <Text>You scored 3/10</Text>
        <Text>You will be presented with 10 True of False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button
          onPress={() => navigation.push('QuizContainer')}
          title={'PLAY AGAIN'}
        />
      </View>
    </SafeAreaCenteredContainer>
  );
}

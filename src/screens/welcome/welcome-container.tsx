import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { SafeAreaCenteredContainer } from '../../styles/base';

export default function WelcomeContainer() {
  const navigation = useNavigation();

  return (
    <SafeAreaCenteredContainer>
      <View>
        <Text>Welcome to the Trivia Challenge</Text>
        <Text>You will be presented with 10 True of False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button
          onPress={() => navigation.push('QuizContainer')}
          title={'BEGIN'}
        />
      </View>
    </SafeAreaCenteredContainer>
  );
}

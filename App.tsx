import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContextProvider } from './src/provider';
import { createStackNavigator } from '@react-navigation/stack';
import QuizContainer from './src/screens/quiz/quiz-container';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeContainer from './src/screens/welcome/welcome-container';
import ScoreContainer from './src/screens/score/score-container';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator initialRouteName='WelcomeContainer'>
          <Stack.Screen
            name='WelcomeContainer'
            component={WelcomeContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='QuizContainer'
            component={QuizContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ScoreContainer'
            component={ScoreContainer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

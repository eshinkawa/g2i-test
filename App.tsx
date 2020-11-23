import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ContextProvider, DataContext } from './src/provider';
import { createStackNavigator } from '@react-navigation/stack';
import QuizContainer from './src/screens/quiz/quiz-container';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeContainer from './src/screens/welcome/welcome-container';
import ScoreContainer from './src/screens/score/score-container';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const { isLoading } = useContext(DataContext);
  let [fontsLoaded] = useFonts({
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            component={WelcomeContainer}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name='Quiz'
            component={QuizContainer}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name='Score'
            component={ScoreContainer}
            options={{ headerShown: false, gestureEnabled: false }}
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

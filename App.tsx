import React from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PlayScreen from './src/screens/PlayScreen';
import Game from './src/screens/Game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Play" component={PlayScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}
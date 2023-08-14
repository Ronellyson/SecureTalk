/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './pages/splash';
import NicknameSetupPage from './pages/nicknameSetup';
import UserRoomPage from './pages/UserRoom';
import ChatPage from './pages/chat';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const [showNicknameSetup, setShowNicknameSetup] = useState(false);

  useEffect(() => {
    // Delay for 15 seconds before showing NicknameSetupPage
    const timer = setTimeout(() => {
      setShowNicknameSetup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showNicknameSetup ? (
          <>
            <Stack.Screen name="NicknameSetup" component={NicknameSetupPage} />
            <Stack.Screen name="UserRoom" component={UserRoomPage} />
            <Stack.Screen name="Chat" component={ChatPage} />
          </>
        ) : (
          <Stack.Screen name="Splash" component={SplashPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

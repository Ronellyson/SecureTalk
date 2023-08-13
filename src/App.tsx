/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import SplashPage from './pages/splash';
import NicknameSetupPage from './pages/nicknameSetup';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <SplashPage /> */}
      <NicknameSetupPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SplashPage(): JSX.Element {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SecureTalk</Text>
        <Icon name="lock" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#191970',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    color: 'white',
    fontSize: 42,
  },
});

export default SplashPage;

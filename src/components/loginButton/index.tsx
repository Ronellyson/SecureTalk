/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface LoginButtonProps {
  isActive: boolean;
  onPress: () => void; // Add an onPress callback
}

function LoginButton({ isActive, onPress }: LoginButtonProps): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.background, isActive ? styles.active : styles.disabled]}>
        <Icon name="login" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  active: {
    backgroundColor: '#32DCD2',
  },
  disabled: {
    backgroundColor: 'gray', // Customize the disabled state color
  },
  icon: {
    color: 'black',
    fontSize: 64,
  },
});

export default LoginButton;

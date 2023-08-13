/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface LogoutButtonProps {
  onPress: () => void; // Add an onPress callback
}

function LogoutButton({ onPress }: LogoutButtonProps): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.background}>
        <Icon name="logout" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#32DCD2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    color: 'black',
    fontSize: 42,
  },
});

export default LogoutButton;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function LogoutButton(): JSX.Element {
  return (
    <View style={[styles.background]}>
      <Icon name="logout" style={styles.icon} />
    </View>
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

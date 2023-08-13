/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StartChatButton from '../startChatButton';

function UserChatCard(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Icon name='egg' style={styles.icon} />
        <Text style={styles.nickName}>egg</Text>
        <StartChatButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 64,
  },
  background: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: 64,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 64,
  },
  nickName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserChatCard;

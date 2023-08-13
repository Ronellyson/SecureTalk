/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface NicknameInputFieldProps {
  onNicknameChange: (nickname: string) => void;
}

function NicknameInputField({ onNicknameChange }: NicknameInputFieldProps): JSX.Element {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (text: string) => {
    setNickname(text);
    onNicknameChange(text); // Call the callback with the updated nickname
  };

  return (
    <View style={styles.background}>
      <TextInput
        style={styles.input}
        placeholder="Enter your nickname"
        value={nickname}
        onChangeText={handleNicknameChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
  },
});

export default NicknameInputField;

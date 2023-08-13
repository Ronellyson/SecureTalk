/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AvatarSwipeOptionList from '../../components/avatarSwipeOptionList';
import NicknameInputField from '../../components/nicknameInputField';
import LoginButton from '../../components/loginButton';

function NicknameSetupPage(): JSX.Element {
  const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null);
  const [nickname, setNickname] = useState('');

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatarId(avatarId);
  };

  const handleNicknameChange = (newNickname: string) => {
    setNickname(newNickname);
  };

  return (
    <View style={styles.background}>
      <Text style={styles.sectionTitle}>Selecione um avatar</Text>
      <AvatarSwipeOptionList onSelectAvatar={handleAvatarSelect} />
      <Text style={styles.sectionTitle}>Digite o seu nick</Text>
      <NicknameInputField onNicknameChange={handleNicknameChange} />
      <View style={styles.loginButtonContainer}>
        <LoginButton isActive={selectedAvatarId !== " " && nickname !== ''} />
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
  sectionTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: '40%',
  },
});

export default NicknameSetupPage;

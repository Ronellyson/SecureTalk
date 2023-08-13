/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutButton from '../../components/logoutButton';
import UserChatCardList from '../../components/UserChatCardList';

function UserRoomPage(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoutButton />
      </View>
      <Text style={styles.sectionTitle}>Usuários Disponíveis</Text>
      <UserChatCardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle:{
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  }
});

export default UserRoomPage;

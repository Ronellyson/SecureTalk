/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import UserChatCard from '../UserChatCard';

function UserChatCardList(): JSX.Element {
  const data = Array.from({ length: 13 }, (_, index) => index);

  const renderItem = () => <UserChatCard />;

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <FlatList
            data={data}
            keyExtractor={(item) => String(item)}
            renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: '100%',
  },
  background: {
    backgroundColor: '#839EFF',
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default UserChatCardList;


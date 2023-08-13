/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Icon from 'react-native-vector-icons/MaterialIcons';
import StartChatButton from '../startChatButton';

function UserChatCard(): JSX.Element {
  const navigation = useNavigation(); // Initialize useNavigation

  const handleStartChatButtonPress = () => {
    // Perform actions when the start chat button is clicked
    console.log('Start chat button clicked!');
    // Add your logic here, such as navigation or API calls

    // Navigate to the desired screen (e.g., the chat screen)
    navigation.navigate('Chat'); // Replace 'Chat' with the correct screen name
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Icon name='egg' style={styles.icon} />
        <Text style={styles.nickName}>egg</Text>
        <StartChatButton onPress={handleStartChatButtonPress} />
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
    justifyContent: 'space-between',
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

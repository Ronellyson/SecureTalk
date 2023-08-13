/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ReceivedMessageWidget({ messageText }: { messageText: string }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{messageText}</Text>
        </View>
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
    alignItems: 'flex-start',
    width: '100%',
  },
  background: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ReceivedMessageWidget;
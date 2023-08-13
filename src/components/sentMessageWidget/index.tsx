import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function SentMessageWidget({ messageText }: { messageText: string }): JSX.Element {
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
    alignItems: 'flex-end',
    width: '100%',
  },
  background: {
    backgroundColor: '#2979FF',
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
    color: 'white',
  },
});

export default SentMessageWidget;

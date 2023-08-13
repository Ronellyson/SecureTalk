import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReceivedMessageWidget from '../../components/receivedMessageWidget';
import SentMessageWidget from '../../components/sentMessageWidget';
import MessageInputWidget from '../../components/messageInputWidget';

function ChatPage(): JSX.Element {
  const [messages, setMessages] = useState([
    { text: 'Hello', received: true },
    { text: 'Hi there!', received: false },
    { text: 'How are you?', received: true },
    { text: 'I\'m good, thanks!', received: false },
    { text: 'What have you been up to?', received: true },
    { text: 'Just working on some projects.', received: false },
    { text: 'That sounds interesting!', received: true },
    { text: 'Yes, it keeps me busy!', received: false },
    { text: 'Did you watch that movie?', received: true },
    { text: 'No, not yet. Is it good?', received: false },
    { text: 'Yeah, I really enjoyed it!', received: true },
    { text: 'I\'ll have to check it out.', received: false },
    { text: 'Hey, how\'s your day going?', received: true },
    { text: 'Pretty good, thanks for asking!', received: false },
    { text: 'Have you been to the new cafe?', received: true },
    { text: 'No, I haven\'t had the chance yet.', received: false },
    { text: 'You should try their coffee!', received: true },
    { text: 'I heard it\'s really good.', received: false },
    { text: 'Hey, did you hear about the event?', received: true },
    { text: 'No, tell me more about it!', received: false },
    { text: 'It\'s happening next weekend.', received: true },
    { text: 'Sounds like fun, I\'ll mark my calendar.', received: false },
    { text: 'Did you finish reading that book?', received: true },
    { text: 'Yes, it was amazing!', received: false },
    { text: 'I couldn\'t put it down.', received: true },
    { text: 'I\'ll have to borrow it from you.', received: false },
  ]);

  const handleSendMessage = (messageText: string) => {
    const newMessage = { text: messageText, received: false };
    setMessages([...messages, newMessage]);
  };

  return (
    <View style={styles.background}>
      <View style={styles.topBar}>
        <Icon name="arrow-back" style={styles.icon} />
        <Icon name={"people"} style={styles.icon} />
        <View style={styles.nickNameContainer}>
          <Text style={styles.nickName}>egg</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={(scrollView) => scrollView?.scrollToEnd()}
      >
        {messages.map((message, index) => (
          <View key={index}>
            {message.received ? (
              <ReceivedMessageWidget messageText={message.text} />
            ) : (
              <SentMessageWidget messageText={message.text} />
            )}
          </View>
        ))}
      </ScrollView>
      <MessageInputWidget onSendMessage={handleSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#191970',
    flex: 1,
  },
  topBar: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20, // Add padding to the top
  },
  icon: {
    color: 'black',
    fontSize: 64,
  },
  nickNameContainer: {
    flex: 1,
    alignItems: 'center',
  },
  nickName: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default ChatPage;
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import socket from '../../../socket';
const ChatScreen = props => {
  const roomName = props?.route?.params.chatRoom;
  const data = props?.route?.params?.params.data;
  console.log('room', data[0].chatRoom);
  const room = data[0].chatRoom;
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  useEffect(() => {
    data.map(item => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, item),
      );
    });
  }, []);

  useEffect(() => {
    socket.off('chat').on('chat', message => {
      console.log('Message', message);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, message),
      );
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log('room', room);
    socket.emit('chat', {chatRoom: room, text: messages[0].text});
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, messages),
    // );
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{width: '100%', height: 60, backgroundColor: 'violet'}}></View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});

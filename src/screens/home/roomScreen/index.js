import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {AppButton, FormInput} from '../../../components';

const RoomScreen = props => {
  const [state, setState] = useState({
    name: '',
    chatRoom: '',
  });
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff8',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          Style={{
            width: '100%',
            height: '100%',
          }}>
          <View></View>
          <FormInput
            style={{
              elevation: 5,
              backgroundColor: 'white',
              marginVertical: 8,
              borderColor: state.focus === 'name' ? '#CD1C1B' : null,
              borderWidth: state.focus === 'name' ? 1 : 0,
              borderRadius: 20,
            }}
            placeHolder={'Enter your Name'}
            bgColor={'#1234'}
            onChangeText={value => setState({...state, name: value})}
            value={state.name}
          />
          <FormInput
            style={{
              elevation: 5,
              backgroundColor: 'white',
              marginVertical: 8,
              borderColor: state.focus === 'ChatRoom' ? '#CD1C1B' : null,
              borderWidth: state.focus === 'ChatRoom' ? 1 : 0,
              borderRadius: 20,
            }}
            placeHolder={'Enter ChatRoom '}
            bgColor={'#1234'}
            onChangeText={value => setState({...state, chatRoom: value})}
            value={state.chatRoom}
          />
          <View
            style={{
              marginTop: 10,
            }}>
            <AppButton
              label={'Create Room'}
              text="Create Room"
              onPress={() => {
                props.navigation.navigate('chatRoom');
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});

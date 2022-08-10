import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyStack from './src/navigation/stack';

const App = props => {
  return <MyStack {...props} />;

  //<ChatScreen />;
};

export default App;

const styles = StyleSheet.create({});

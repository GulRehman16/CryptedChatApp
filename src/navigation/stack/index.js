import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../../screens/home/chatScreen';
import RoomScreen from '../../screens/home/roomScreen';
import Splash from '../../screens/splash';

const Stack = createNativeStackNavigator();

export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="roomScreen"
        component={RoomScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="chatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homes">
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

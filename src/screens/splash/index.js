import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Images} from '../../constants';

const Splash = ({navigation}) => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    useEffect(() => {
      startImageRotateFunction();
      setTimeout(() => {
        navigation.replace('roomScreen');
      }, 1000);
    }, []),
    (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <ImageBackground source={Images.Background.bg} style={styles.container}>
          <Animated.Text
            style={{
              fontSize: 40,
              color: '#fff',
              fontWeight: 'bold',
              transform: [{rotate: RotateData}],
            }}>
            <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
              HILL CIPHER
            </Text>
          </Animated.Text>
        </ImageBackground>
      </SafeAreaView>
    )
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: 'red',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

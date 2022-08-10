import {Icon} from 'react-native-elements';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const AppButton = ({
  onPress,
  label,
  iconBG,
  iconN,
  iconT,
  iconL,
  iconR,
  buttonStyle,
  color,
  btnWidth,
  position,
  btnHeight,
  icon2,
  iconClr,
  iconW,
  iconH,
  text,
  brder1,
  backgroundColor,
}) => {
  const icon = iconL || iconR;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={
        buttonStyle || {
          width: btnWidth || '100%',
          height: btnHeight || 50,
          borderRadius: brder1 || 30,
          backgroundColor: backgroundColor || '#CD1C1B',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }
      }>
      {text && (
        <Text
          style={{color: color || 'white', fontWeight: 'bold', fontSize: 18}}>
          {' '}
          {label}{' '}
        </Text>
      )}
      {icon && (
        <View
          style={{
            width: iconW || 35,
            height: iconH || 35,
            backgroundColor: iconBG || 'pink',
            borderRadius: 8,
            position: position || 'absolute',
            right: iconR ? 15 : null,
            left: iconL ? '29%' : null,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={iconN || 'right'}
            type={iconT || 'AntDesign'}
            style={{fontSize: 20}}
          />
        </View>
      )}
      {icon2 && (
        <View
          style={{
            width: iconW || 35,
            height: iconH || 35,
            backgroundColor: iconBG || 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{}}>{label}</Text>
          <Icon
            name={iconN || 'right'}
            type={iconT || 'AntDesign'}
            style={{fontSize: 20, color: iconClr || 'white'}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export {AppButton};

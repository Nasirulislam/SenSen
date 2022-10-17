import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Index: () => React$Node = (props) => {
  let {
    value,
    placeholder,
    label,
    onChangeText,
    inputStyles,
    labelStyles,
    autoCapitalize,
    isPassword

  } = props;
  return (
    <View style={[styles.container]}>
      <Text style={[styles.inputLabel, labelStyles]}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={true}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.inputBox, inputStyles]}
      />
    </View>
  );
};

export default Index;

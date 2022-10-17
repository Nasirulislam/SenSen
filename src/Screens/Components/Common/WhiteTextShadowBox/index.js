import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const index = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={[styles.subContainer, props.boxStyle]}>
      <Text style={{}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default index;

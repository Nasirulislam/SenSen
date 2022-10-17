import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';

const index = ({onPress, boxStyle, children}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.subContainer, boxStyle]}>
      {children}
    </TouchableOpacity>
  );
};

export default index;

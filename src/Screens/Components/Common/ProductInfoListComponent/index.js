import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('screen');

const index = props => {
  let { containerStyle = {}, goto, item } = props;
  return (
    <TouchableOpacity key={"a" + item._id}
      onPress={goto}
      style={[styles.container, containerStyle]}>
      <Image
        source={{
          uri: item.coverImageLink
        }}
        style={{ height: width * 0.28, width: width * 0.28, resizeMode: 'cover' }}
      />
      <Text
        style={{fontSize:width*0.04, paddingHorizontal: width * 0.04, width: width * 0.55, fontWeight: '500' }}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

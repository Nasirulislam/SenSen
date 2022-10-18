import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('screen');

const index = props => {
  let { containerStyle = {}, onPress = null, item } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: item.snippet.thumbnails.default.url }}
          style={{
            height: width * 0.3,
            width: width * 0.35,
            resizeMode: 'cover',
            borderWidth: 1,
          }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              left: width * 0.03,
              width: width * 0.50,
              fontWeight: '800',
            }}>
            {item.snippet.title}
          </Text>
          <Text style={{width: width * 0.50, marginHorizontal:20 }}>
            {item.snippet.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;

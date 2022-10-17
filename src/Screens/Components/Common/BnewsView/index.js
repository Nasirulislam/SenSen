import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity,Linking } from 'react-native';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';

const { width } = Dimensions.get('screen');

const index = props => {
  let { containerStyle = {}, goto, item } = props;
  return (
    <TouchableOpacity key={item.id}
      onPress={()=>Linking.openURL(item.url)}
      style={[styles.container, containerStyle]}>
      {/* <Image
        source={{
          uri: item.coverImageLink
        }}
        style={{ height: width * 0.28, width: width * 0.28, resizeMode: 'cover' }}
      /> */}
      <Text
        style={{ left: width * 0.001, width: width * 0.8, fontWeight: '500' }}>
          <Icon
    style={{
      
            //justifyContent: "center",
     // textAlign: "right"
    }}
    size = {width/15}
    name="keyboard-arrow-right"
    type="MaterialIcons"
  />
        {item.titletext}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

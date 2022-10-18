import React, { useState } from 'react';
import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SEARCH } from '../../../../Assets/images/Icons';

const index = props => {
  const [searchText, setsearchText] = useState('');

  let {
    placeholder = '',
    style = {},
    containerStyle = {},
    magStyle = {},
    onPressMag = null,
    onEmptyMag = null
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        onChangeText={(text) => { setsearchText(text); props.onEmptyMag(text) }}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        style={[styles.inputBox, style]}
      />
      <TouchableOpacity
        style={[styles.searchBox, magStyle]}
        onPress={() => props.onPressMag(searchText)}>
        <Image source={SEARCH} style={styles.magImage} />
      </TouchableOpacity>
    </View>
  );
};

export default index;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import Language from '../Config/Language';

const {width, height} = Dimensions.get('screen');
const Button: () => React$Node = ({goto, size, text, viewStyle, textStyle}) => {
  return (
    <>
      {size === 'small' ? (
        <TouchableOpacity
          style={[styles.smlcontainer, viewStyle]}
          onPress={() => goto()}>
          <Image
            resizeMode="contain"
            style={styles.smlbuttonImg}
            source={require('../Assets/images/Button_round.png')}
          />
          <View style={styles.btnMain}>
            <Text style={[styles.smltext, textStyle]}>{text ? text : Language.SUBMIT}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.container, viewStyle]}
          onPress={() => goto()}>
          <Image
            resizeMode="contain"
            style={styles.buttonImg}
            source={require('../Assets/images/Button_round.png')}
          />
          <Text style={styles.text}>{text ? text : Language.SUBMIT}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height / 25,
    justifyContent: 'center',
  },
  btnMain: {
  //  width: width * 0.38,
    marginHorizontal:width*0.05,
    marginRight: width * 0.05,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  smlcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height / 25,
    justifyContent: 'center',
  },
  inputbox: {
    borderRadius: 4,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 10,
    borderColor: 'green',
    backgroundColor: 'white',
  },
  buttonImg: {
    width: width / 3.3,
    height: width / 3.3,
    zIndex: 10,
  },
  smlbuttonImg: {
    width: width / 4,
    height: width / 4,
    zIndex: 10,
  },
  text: {
    fontSize: width / 11,
    backgroundColor: '#1e9545',
    color: 'white',
    fontFamily: 'EurostileBQ-Regular',
    paddingVertical: width / 35,
    paddingHorizontal: width / 12,
    marginLeft: -(width / 14),
    borderRadius: 15,
    overflow: 'hidden',
  },
  smltext: {
    fontSize: width / 21,
    backgroundColor: '#1e9545',
    color: 'white',
    fontFamily: 'EurostileBQ-Regular',
    paddingVertical: 15,
    textAlign: 'center',
    paddingHorizontal: width / 10,
    marginLeft: -(width / 7),
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default Button;

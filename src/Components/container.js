/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Children} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomBar from '../Screens/Components/Common/BottomBar/BottomBar';
import { hp } from '../Config/Helper/ResponsiveScreen';

const {width, height} = Dimensions.get('screen');
const Container = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeview}>
        <Image
          source={require('../Assets/images/CSA_Watermark.png')}
          resizeMode="contain"
          style={styles.watermark}
        />
        <ScrollView
          style={{marginBottom: hp(props?.navigation ? 6 : 0)}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'>
          {props.children}
        </ScrollView>
      </SafeAreaView>
      {
        props?.navigation &&
        <BottomBar {...props} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  watermark: {
    display: 'flex',
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? height / 1.15 : height / 1.25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  safeview: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 15,
  },
});

export default Container;

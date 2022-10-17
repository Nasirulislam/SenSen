import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp} from '../../../Config/Helper/ResponsiveScreen';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  logo: {
    width: width / 1.1,
    height: width / 3.5,
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: hp(30),
    top: hp(8),
  },
  watermark: {
    display: 'flex',
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? height / 1.15 : height / 1.25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
});

export default styles;

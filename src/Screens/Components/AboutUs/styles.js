import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImg: {
    height: height / 3.2,
  },
  safeview: {
    marginHorizontal: width / 8,
  },
  watermark: {
    display: 'flex',
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? height / 1.15 : height / 1.25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  warranty: {
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    alignSelf: 'center',
    paddingVertical: 120,
  },
  aboutHeading: {
    paddingVertical: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: width / 18,
    backgroundColor: '#1b7139',
    fontFamily: 'EurostileBQ-Regular',
  },
  aboutTxt: {
    fontSize: width / 25,
    fontFamily: 'EurostileBQ-Regular',
    textAlign: 'left',
    marginVertical: 15,
  },
});

export default styles;

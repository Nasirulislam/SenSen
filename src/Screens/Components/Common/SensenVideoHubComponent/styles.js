import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: width / 1.5,
    height: width / 6,
    alignSelf: 'center',
  },
  menuTxt: {
    backgroundColor: '#1b7139',
    paddingVertical: 5,
    fontSize: width / 15,
    color: 'white',
    fontFamily: 'EurostileBQ-Regular',
    textAlign: 'center',
  },
});

export default styles;

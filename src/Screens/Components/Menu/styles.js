import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
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
  iconRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: height / 6.5,
  },
  icon: {
    width: width / 3,
    height: width / 3,
  },
});

export default styles;

import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../Config/Helper/styles';
import { wp } from '../../../Config/Helper/ResponsiveScreen';

const {width, height} = Dimensions.get('screen');

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
  subcontainer: {
    // height: height * 0.04,
    width: width * 0.8,
    justifyContent: 'center',
    marginTop: height * 0.01,
    shadowColor: 'grey',
    backgroundColor: 'white',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
    padding: wp(3),
  },
  displaycontainer: {
    width: width * 0.7,
    justifyContent: 'center',
    backgroundColor: colors.OPACITY_GREEN,
    padding: wp(2),
  },
});

export default styles;

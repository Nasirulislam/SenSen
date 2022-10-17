import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../Config/Helper/styles';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
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
    backgroundColor: colors.SYSTEM_GREEN,
    paddingVertical: 5,
    fontSize: width / 15,
    color: 'white',
    fontFamily: 'EurostileBQ-Regular',
    textAlign: 'center',
  },
  subcontainer: {
    height: height * 0.04,
    width: width * 0.8,
    justifyContent: 'flex-start',
    marginTop: height * 0.01,
    shadowColor: 'grey',
    backgroundColor: 'white',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  displaycontainer: {
    width: width * 0.7,
    justifyContent: 'center',
    backgroundColor: 'rgba(225, 238, 231, 0.8)',
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  inputLable: {
    fontSize: width / 26,
    fontFamily: 'EurostileBQ-Regular',
    marginTop: height / 30,
  },
  checkboxMain: {
    display: 'flex',
    height: hp(20),
    padding: wp(7),
    justifyContent: 'space-between',
  },
  checkboxview: {
    justifyContent: 'space-between',
    width: wp(25),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chexbox: {
    borderColor: 'green',
  },
});

export default styles;

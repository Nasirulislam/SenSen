import {Dimensions, Platform, StyleSheet} from 'react-native';
import {wp} from '../../../../Config/Helper/ResponsiveScreen';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  inputBox: {
    borderRadius: 4,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderColor: 'green',
    // backgroundColor: 'white',
    width: wp(80),
  },
  inputLabel: {
    fontSize: width / 26,
    fontFamily: 'EurostileBQ-Regular',
    marginTop: height / 30,
  },
});

export default styles;

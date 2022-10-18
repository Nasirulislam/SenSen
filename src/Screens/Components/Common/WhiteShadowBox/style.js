import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../Config/Helper/ResponsiveScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    width: wp(90),
    padding: wp(2),
    paddingHorizontal: wp(10),
    justifyContent: 'center',
    shadowColor: 'grey',
    backgroundColor: 'white',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
});

export default styles;

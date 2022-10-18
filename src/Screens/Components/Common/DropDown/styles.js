import {StyleSheet} from 'react-native';
import {colors} from '../../../../Config/Helper/styles';
import {wp} from '../../../../Config/Helper/ResponsiveScreen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.SYSTEM_GREEN,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: 'black',
  },
  label: {
    
    color: 'white',
    fontWeight: '900',
    fontFamily: 'EurostileBQ-Regular',
    
  },
  displayContainer: {
    zIndex: 1000,
    position: 'absolute',
    padding: wp(4),
    justifyContent: 'center',
    backgroundColor: colors.SYSTEM_GREEN,
  },
});

export default styles;

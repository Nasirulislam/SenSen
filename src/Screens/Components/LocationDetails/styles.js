import {Dimensions, Platform, StyleSheet} from 'react-native';
import {wp} from '../../../Config/Helper/ResponsiveScreen';
import {colors} from '../../../Config/Helper/styles';

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
  blackSmallFonts: {
    fontSize: wp(4.5),
    fontWeight: '800',
    textAlign: 'center',
  },
  greenBigFonts: {
    fontSize: wp(8.5),
    fontWeight: '800',
    textAlign: 'center',
    color: colors.SYSTEM_GREEN,
  },
  inside:{
    // float:'left',
  },
  outside:{
    flexDirection:'row',
    padding:10
  },
  nameStyle:{
    fontSize: wp(5.5),
    fontWeight: '900',
    color:'black'
  },
  detailStyle:{
    fontSize: wp(4.0),
    fontWeight: 'bold',
    color:'grey'
  },
  distStyle:{
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color:'black'
  },
  btnColor:{
    color:'#009dff',
    fontWeight: 'bold',
  }
});

export default styles;

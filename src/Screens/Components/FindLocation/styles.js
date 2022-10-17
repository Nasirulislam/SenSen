import {Dimensions, Platform, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {wp} from '../../../Config/Helper/ResponsiveScreen';
import {colors} from '../../../Config/Helper/styles';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
 
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
    fontSize: wp(5.5),
    fontWeight: '800',
    textAlign: 'center',
    // backgroundColor: 'rgba(0,0,0,0)',
  },
  boldFont:
  {fontSize: wp(5.5),fontWeight:'bold', textAlign: 'center'},
  greenBigFonts: {
    fontSize: wp(8.5),
    fontWeight: '800',
    textAlign: 'center',
    color: colors.SYSTEM_GREEN,
  },
  topView: {
    marginTop:50
  },
  inputContainer: {
    borderRadius: 4,
    borderWidth: 4,
    marginHorizontal: 0,
    width: width * 0.8,
    borderColor: 'black',
    padding: 7,
    height: 55,
    backgroundColor: 'white',
    color:'black',
    fontSize: wp(5.5)
  },
  iptContainer:{
    marginTop:20,
    alignItems:"center",
    justifyContent:'center'
  },
  btn:{
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: '#1b7139',
    width: width * 0.8,
    marginTop:20,
    height: 55,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTxt:{
    color:'#fff',
    fontSize: wp(5.5)
  },
  error:{
    color:'red'
  }
});

export default styles;

import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';
import {SHW} from '../../../Config/Helper/styles';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle:{ top: height * 0.05,paddingBottom: height * 0.1},
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
  catSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  justifyContent: 'space-between',
    width: wp(90),
    top: hp(1),
  },
  catSearchContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(90),
    top: hp(3),
    
  },
  controlContainer: {
    right: width * 0.08,
    alignSelf: 'flex-end',
    width: width * 0.3,
    marginTop: height * 0.02,
    borderRadius: 2,
    padding: 3,
    backgroundColor: 'black',
  },
  dotMain: {
    display: 'flex',
    height: hp(3),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp(-5),
    right: wp(2),
  },
  dotStyle: {
    ...SHW(3.5),
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: wp(1),
  },
  dropd:{
    fontSize : width/15,
    backgroundColor:'white'
  }
});

export default styles;

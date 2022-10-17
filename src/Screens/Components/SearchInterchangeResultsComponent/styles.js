import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';

const styles = StyleSheet.create({
  logo: {
    left: wp(-3),
    height: hp(6),
    width: wp(55),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interchangeTable: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.5,
  },

  interchangeCol1: {
    flex: 0.3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  interchangeCol2: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  interchangeImg: {
    width: 70,
    height: 70
  },
  boldhd: {
    fontWeight: 'bold', 
  },
  interCol1:{
    flex: 0.35,
   
  },
  interCol2:{
    flex: 0.6,
   
  },
  horizontalTabContainer: {
    top: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(92),
    backgroundColor: 'black',
    padding: wp(0.5),
    justifyContent: 'space-between',
  },
  singleTab: {
    padding: wp(1.2),
    width: wp(30),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(111, 119, 126)',
    justifyContent: 'space-between',
  },
  tabText: {
    fontSize: wp(3.2),
  },
  greenHeaderView: {
    justifyContent: 'space-between',
    backgroundColor: 'rgb(23, 115, 51)',
    padding: wp(1),
    flexDirection: 'row',
  },
  greenHeaderText: {
    fontSize: wp(3),
    color: 'white',
    fontWeight: '700',
  },
  grayButton: {
    width: wp(85),
    padding: wp(1.5),
    backgroundColor: 'rgb(111, 119, 126)',
    marginTop: hp(2),
    borderRadius: 3,
    alignItems: 'center',
  },
  fordHeader: {
    padding: wp(3),
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownContainer: {
    marginTop: hp(1),
    alignItems: 'center',
  },
  greyLine: {
    width: wp(85),
    backgroundColor: 'grey',
    height: hp(0.3),
    top: hp(1),
  },
  centerText: {
    // top: hp(-2.2),
    // left: wp(30),
    width: wp(65),
  },
  bottomCenterText: {
    // top: hp(-1.5),
    // left: wp(30),
    width: wp(65),
  },
  nomatch:{
    borderWidth:1,
    borderRadius:4,
    padding:7,
    marginVertical:4
  }
});

export default styles;

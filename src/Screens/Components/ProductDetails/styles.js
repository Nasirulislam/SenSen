import {Dimensions, Platform, StyleSheet} from 'react-native';
import CSS from '../../../Global/Styles';
import { hp } from '../../../Config/Helper/ResponsiveScreen';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImg: {
    height: height / 3.2,
  },
  watermark: {
    display: 'flex',
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? height / 1.15 : height / 1.25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  safeview: {
    flex: 1,
  },
  dotMain: {
    display: 'flex',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: -(height / 28),
    paddingRight: 30,
  },
  dotStyle: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  select: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlContainer: {
    borderRadius: 4,
    marginVertical: 13,
    padding: 2,
    width: width / 3.35,
    backgroundColor: '#6e757c',
  },
  logo: {
    width: width / 1.5,
    height: width / 6,
    alignSelf: 'center'
  },
  selectionMain: {
    display: 'flex',
    flexDirection: 'row',
    width: width * 0.9,
    flex: 0.1,
    marginHorizontal: width / 20,
  },
  contentMain: {
    flex: 0.9,
    width: width * 0.9,
    borderWidth: 1,
    marginHorizontal: width / 20,
    marginBottom: hp(6),
  },
  detailhead: {
    height: height / 24,
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  detailhead1: {
    height: height / 24,
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  productID: {
    width: width * 0.3,
    color: 'black',
    fontWeight: 'bold',
   // paddingLeft: 2,
    textAlign:'center',
   
  },
  productTitle1: {
    width: width * 0.65,
    backgroundColor: 'gray',
   // backgroundColor: '#1e9545',
    //color: 'white',
    height: height / 24,
    // fontWeight: 'bold',
    paddingVertical: 10,
    paddingLeft: 5,
   // textAlign:'center',
  },
  productTitle: {
    width: width * 0.9,
    backgroundColor: '#1e9545',
    color: 'white',
    height: height / 24,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingLeft: 5,
   textAlign:'center',
  },
  productMainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  productMainContainer1: {
    display: 'flex',
    flexDirection: 'row',
  },
  producttxt: {
   //flex: 0.55,
    padding: 15,
  },
  productImg: {
    flex: 1,
    alignItems: 'center',

  },
  productimage: {
    width: width / 2,
    height: width / 1.8,
    alignItems: 'center',
    backgroundColor:'white',
  
  },
  productimage360: {
    position:'absolute',
    width: width / 6,
    height: width / 8,
    alignSelf: 'flex-start',
    bottom:0,
  },
  bulletsview: {
    paddingLeft: 15,
  },
  bulletTxt: {},
  productList: {
    paddingHorizontal: 10,
  },
  prodTable: {
    display: 'flex',
    backgroundColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buyerTable: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 0,
  },
  linesaperate: {
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  buyerCol: {
    flex: 0.25,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0.3,
    padding: 4,
  },
  buyerHeader: {
    fontSize: CSS.PRODUCT_DETAILS_TEXT,
    fontWeight: '900',
  },
  buyerTxt: {
    fontSize: CSS.PRODUCT_DETAILS_TEXT,
  },
  tabCol1: {
    flex: 0.25,
  },
  tabCol2: {
    flex: 0.25,
  },
  tabCol3: {
    flex: 0.25,
  },
  tabCol4: {
    flex: 0.25,
  },
  prodDetailsTxt: {
    fontSize: CSS.PRODUCT_DETAILS_TEXT,
  },

  buyerguidmain: {
    padding: 10,
  },
  buyerSelector: {
    borderWidth: 1,
    backgroundColor:'rgb(219,222,229)'
  },
  interchangeCol1: {
    flex: 0.4,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0.3,
    padding: 4,
  },
  interchangeCol2: {
    flex: 0.6,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0.3,
    padding: 4,
  },
  interchangeTxt: {
    fontSize: CSS.PRODUCT_DETAILS_TEXT,
  },
  intchangeHeading:{
    padding:10
  },
  bulletText:{
    width:width*0.8,
    marginTop:5
  }
});

export default styles;

import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  watermark: {
    display: 'flex',
    width: width / 3,
    height: height / 1.2,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  safeview: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  TextInputbox: {
    borderRadius: 4,
    borderWidth: 4,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderColor: 'green',
  },
  TextInputLable: {
    fontSize: width / 26,
    fontFamily: 'EurostileBQ-Regular',
    marginTop: height / 30,
  },
  logo: {
    width: width / 1.1,
    height: width / 3.5,
    alignSelf: 'center',
  },
  logotxt: {
    fontSize: Platform.OS === 'ios' ? width / 14 : width / 12,
    fontFamily: 'EurostileBQ-Regular',
    width: width / 1.5,
    flex: 0.7,
    marginBottom: 15,
  },
  sloganview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carlogo: {
    width: width / 4,
    height: width / 5,
    flex: 0.3,
  },
  form: {
    marginHorizontal: width / 11,
  },
  checkboxMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chexbox: {
    borderColor: 'green',
  },
  lang: {
    fontFamily: 'EurostileBQ-Regular',
  },
  langHeading: {
    fontFamily: 'EurostileBQ-Regular',
    fontSize: width / 26,
    marginTop: height / 25,
    marginBottom: 10,
  },
});

export default styles;

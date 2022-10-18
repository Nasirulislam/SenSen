import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.84,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    borderRadius: 4,
    borderWidth: 3,
    marginHorizontal: 0,
    width: width * 0.8,
    borderColor: 'black',
    padding: 3,
    height: height * 0.057,
    backgroundColor: 'white',
  },
  searchBox: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#1b7139',
  },
  magImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default styles;

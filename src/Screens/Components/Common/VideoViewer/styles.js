import {StyleSheet} from 'react-native';
import { hp, wp } from '../../../../Config/Helper/ResponsiveScreen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  videoView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    top: hp(58.5),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: hp(5),
    width: wp(100),
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: "#FFF",
  },
});

export default styles;

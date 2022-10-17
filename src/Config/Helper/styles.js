import {hp, wp} from './ResponsiveScreen';

const colors = {
  SYSTEM_GREEN: '#1b7139',
  LIGHT_GREEN: '#1e9545',
  OPACITY_GREEN: 'rgba(212,236,220,0.8)',
  DARK_GREY: 'rgb(115, 126, 132)',
  BACK_ARROW_GREY: 'rgb(189, 189, 189)',
};

const SHW = value => {
  return {
    height: wp(value),
    width: wp(value),
  };
};

const HW = (height, width) => {
  return {
    height: hp(height),
    width: wp(width),
  };
};

export {colors, SHW, HW};

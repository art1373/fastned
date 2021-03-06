import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const size = {
  h1: wp(8),
  h2: wp(7),
  h3: wp(6),
  h4: wp(5),
  input: wp(4),
  regular: wp(3),
  medium: wp(2),
  small: wp(1),
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h3bold: {
    fontSize: size.h3,
    fontFamily: 'Poppins-SemiBold',
  },
  h4: {
    fontSize: size.h4,
  },
  h4Bold: {
    fontSize: size.h4,
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    fontSize: size.input,
    fontFamily: 'Poppins-Medium',
  },
  normal: {
    fontSize: size.regular,
    fontFamily: 'Poppins-Light',
  },
  normalBold: {
    fontSize: size.regular * 1.1,
    fontFamily: 'Poppins-Medium',
  },
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
});

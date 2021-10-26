import {Dimensions, Platform} from 'react-native';

export const screen = Dimensions.get('window');

export const metrics = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  smallIos: Platform.OS === 'ios' && screen.height <= 800,
  smallAndroid: Platform.OS === 'android' && screen.height <= 800,
};

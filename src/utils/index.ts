import {
  Alert,
  Dimensions,
  PixelRatio,
  Platform,
  ToastAndroid,
} from 'react-native';

export const {width: deviceWidth, height: deviceHeight} =
  Dimensions.get('window');
export const scale = (scaleWidth: number) => {
  const DESIGN_WIDTH = 390;
  return Math.round(
    PixelRatio.roundToNearestPixel(scaleWidth * (deviceWidth / DESIGN_WIDTH)),
  );
};

export const showToastNative = (message: string) => {
  if (Platform.OS === 'ios' || Platform.OS === 'windows') {
    Alert.alert('MOOD', message);
  } else {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
};

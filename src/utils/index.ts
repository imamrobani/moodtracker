import {Dimensions, PixelRatio} from 'react-native';

export const {width: deviceWidth, height: deviceHeight} =
  Dimensions.get('window');
export const scale = (scaleWidth: number) => {
  const DESIGN_WIDTH = 360;
  return Math.round(
    PixelRatio.roundToNearestPixel(scaleWidth * (deviceWidth / DESIGN_WIDTH)),
  );
};

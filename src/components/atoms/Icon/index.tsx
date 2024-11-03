import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import {scale} from '@utils';
import {
  icHappy,
  icNeutral,
  icRadioActive,
  icRadioInactive,
  icSad,
  icStressed,
  icTabHomeActive,
  icTabHomeInactive,
  icTabSettingsActive,
  icTabSettingsInactive,
  icTabStatisticsActive,
  icTabStatisticsInactive,
} from '@assets';

type Props = {
  name: IconName;
  width?: number;
  height?: number;
  size?: number;
  fillColor?: string;
  style?: ViewStyle;
};

const getSource = (name: IconName) => {
  switch (name) {
    case 'icHappy':
      return icHappy;
    case 'icNeutral':
      return icNeutral;
    case 'icRadioActive':
      return icRadioActive;
    case 'icRadioInactive':
      return icRadioInactive;
    case 'icSad':
      return icSad;
    case 'icStressed':
      return icStressed;
    case 'icTabHomeActive':
      return icTabHomeActive;
    case 'icTabHomeInactive':
      return icTabHomeInactive;
    case 'icTabSettingsActive':
      return icTabSettingsActive;
    case 'icTabSettingsInactive':
      return icTabSettingsInactive;
    case 'icTabStatisticsActive':
      return icTabStatisticsActive;
    case 'icTabStatisticsInactive':
      return icTabStatisticsInactive;
  }
};

const Icon: React.FC<Props> = props => {
  const {
    name,
    width = 24,
    height = 24,
    size = 0,
    fillColor = 'none',
    style,
  } = props;

  const ImportedIcon = getSource(name) as React.ElementType;

  return (
    <View style={style}>
      <ImportedIcon
        style={{color: fillColor}}
        width={scale(size) || scale(width)}
        height={scale(size) || scale(height)}
        fill={fillColor}
      />
    </View>
  );
};

export default memo(Icon);

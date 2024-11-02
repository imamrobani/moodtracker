import React from 'react';
import {TouchableOpacity} from 'react-native';

// components
import Text from '../Text';
import Icon from '../Icon';

// styles
import styles from './styles';
import {Colors} from '@constants';

type Props = {
  type: MoodType;
  onPress?: () => void;
};

const ButtonMood: React.FC<Props> = ({type, onPress}) => {
  const getMoodStyle = () => {
    switch (type) {
      case 'happy':
        return {
          iconName: 'icHappy' as IconName,
          bgColor: Colors.MOOD_HAPPY,
          textColor: Colors.TEXT_HAPPY,
          text: 'Happy',
        };
      case 'neutral':
        return {
          iconName: 'icNeutral' as IconName,
          bgColor: Colors.MOOD_NEUTRAL,
          textColor: Colors.TEXT_NEUTRAL,
          text: 'Neutral',
        };
      case 'sad':
        return {
          iconName: 'icSad' as IconName,
          bgColor: Colors.MOOD_SAD,
          textColor: Colors.TEXT_SAD,
          text: 'Sad',
        };
      case 'stress':
        return {
          iconName: 'icStressed' as IconName,
          bgColor: Colors.MOOD_STRESSED,
          textColor: Colors.TEXT_STRESSED,
          text: 'Stress',
        };
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: getMoodStyle().bgColor}]}
      onPress={onPress}>
      <Icon name={getMoodStyle().iconName} />
      <Text type="semiBold" size={18} color={getMoodStyle().textColor}>
        {getMoodStyle().text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonMood;

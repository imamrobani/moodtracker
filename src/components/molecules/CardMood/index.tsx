import React from 'react';
import {Icon, Text, View} from '@/components/atoms';
import styles from './styles';
import {Colors} from '@constants';

type Props = {
  type: MoodType;
  value: number;
};

const CardMood: React.FC<Props> = ({type, value}) => {
  const getMoodStyle = () => {
    switch (type) {
      case 'happy':
        return {
          iconName: 'icHappy' as IconName,
          textColor: Colors.TEXT_HAPPY,
          text: 'Happy',
        };
      case 'neutral':
        return {
          iconName: 'icNeutral' as IconName,
          textColor: Colors.TEXT_NEUTRAL,
          text: 'Neutral',
        };
      case 'sad':
        return {
          iconName: 'icSad' as IconName,
          textColor: Colors.TEXT_SAD,
          text: 'Sad',
        };
      case 'stress':
        return {
          iconName: 'icStressed' as IconName,
          textColor: Colors.TEXT_STRESSED,
          text: 'Stress',
        };
    }
  };

  return (
    <View style={styles.container}>
      <View row gap={4} alignItems="center">
        <Icon name={getMoodStyle().iconName} size={20} />
        <Text type="semiBold" size={12} color={getMoodStyle().textColor}>
          {getMoodStyle().text}
        </Text>
      </View>
      <Text color="GRAY_900">{value}%</Text>
    </View>
  );
};

export default CardMood;

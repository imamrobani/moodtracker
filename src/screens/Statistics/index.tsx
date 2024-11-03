import React from 'react';
import {PieChart, BarChart} from 'react-native-gifted-charts';

// components
import {View, Text, CardMood, Icon} from '@components';

// styles
import styles from './styles';
import {Colors} from '@constants';

// utils
import {scale} from '@utils';

const Statistics = () => {
  const isPieChart = true;

  const data = [
    {
      type: 'happy',
      value: 20,
      color: Colors.TEXT_HAPPY,
      frontColor: Colors.TEXT_HAPPY,
      topLabelComponent: () => renderIcon('happy'),
    },
    {
      type: 'neutral',
      value: 10,
      color: Colors.TEXT_NEUTRAL,
      frontColor: Colors.TEXT_NEUTRAL,
      topLabelComponent: () => renderIcon('neutral'),
    },
    {
      type: 'sad',
      value: 20,
      color: Colors.TEXT_SAD,
      frontColor: Colors.TEXT_SAD,
      topLabelComponent: () => renderIcon('sad'),
    },
    {
      type: 'stress',
      value: 40,
      color: Colors.TEXT_STRESSED,
      frontColor: Colors.TEXT_STRESSED,
      topLabelComponent: () => renderIcon('stress'),
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'happy':
        return <Icon name="icHappy" size={20} />;
      case 'neutral':
        return <Icon name="icNeutral" size={20} />;
      case 'sad':
        return <Icon name="icSad" size={20} />;
      case 'stress':
        return <Icon name="icStressed" size={20} />;
    }
  };

  return (
    <View style={styles.page}>
      <Text center size={20} type="semiBold">
        Statistics
      </Text>
      <View gap={24}>
        <View style={styles.chartContainer}>
          {isPieChart ? (
            <PieChart data={data} radius={scale(186 / 2)} />
          ) : (
            <BarChart
              data={data}
              barWidth={scale(70)}
              isAnimated
              barBorderTopLeftRadius={10}
              barBorderTopRightRadius={10}
              spacing={0}
              hideAxesAndRules={true}
              barMarginBottom={8}
            />
          )}
        </View>
        <View row flex={1} flexWrap="wrap" gap={16}>
          {data.map((item, index) => (
            <CardMood
              key={index}
              type={item.type as MoodType}
              value={item.value}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Statistics;

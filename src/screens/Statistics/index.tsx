import React from 'react';
import {PieChart, BarChart} from 'react-native-gifted-charts';

// components
import {View, Text, CardMood, Icon, Header} from '@components';

// styles
import styles from './styles';

// utils
import {scale} from '@utils';
import {useAppSelector} from '@reduxhooks';

const Statistics = () => {
  const moods = useAppSelector(state => state.moodReducer.moods);
  const typeChart = useAppSelector(state => state.settingReducer.typeChart);

  const barChartData = moods.map(mood => ({
    ...mood,
    topLabelComponent: () => renderIcon(mood.type),
  }));

  const isPieChart = typeChart === 'pie';

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

  const renderChart = () => {
    if (moods.every(mood => mood.percentage === 0)) {
      return (
        <Text center size={16} type="semiBold" color="TEXT_SAD">
          {'No data,\nplease select your mood'}
        </Text>
      );
    }

    return (
      <>
        {isPieChart ? (
          <PieChart data={moods} radius={scale(186 / 2)} />
        ) : (
          <BarChart
            data={barChartData}
            barWidth={scale(70)}
            isAnimated
            barBorderTopLeftRadius={10}
            barBorderTopRightRadius={10}
            spacing={0}
            hideAxesAndRules={true}
            barMarginBottom={8}
          />
        )}
      </>
    );
  };

  return (
    <View style={styles.page}>
      <Header label="Statistics" />
      <View gap={24}>
        <View style={styles.chartContainer}>{renderChart()}</View>
        <View row flex={1} flexWrap="wrap" gap={16}>
          {moods.map((item, index) => (
            <CardMood
              key={index}
              type={item.type as MoodType}
              value={item.percentage}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Statistics;

import React from 'react';
import {TouchableOpacity} from 'react-native';

// components
import {View, Text, Icon} from '@components';

// styles
import styles from './styles';

// store
import {useAppDispatch, useAppSelector} from '@reduxhooks';
import {resetTypeChart, setTypeChart} from '@slice/setting/settingSlice';
import {resetMood} from '@slice/mood/moodSlice';

// utils
import {showToastNative} from '@/utils';
import {clearStorage} from '@libraries';

const OPTION = [
  {type: 'pie', text: 'Pie Chart'},
  {type: 'bar', text: 'Bar Chart'},
];

const Settings = () => {
  const dispatch = useAppDispatch();
  const typeChart = useAppSelector(state => state.settingReducer.typeChart);

  const handleReset = () => {
    // clear storage
    clearStorage();

    // reset redux
    dispatch(resetTypeChart());
    dispatch(resetMood());

    showToastNative('Data has been reset');
  };

  return (
    <View style={styles.page}>
      <Text center size={20} type="semiBold">
        Settings
      </Text>

      <View gap={8}>
        <Text type="semiBold" size={16}>
          Select Chart
        </Text>
        {OPTION.map(item => (
          <TouchableOpacity
            key={item.type}
            activeOpacity={0.8}
            style={styles.radioContainer}
            onPress={() => dispatch(setTypeChart(item.type))}>
            <Icon
              name={
                item.type === typeChart ? 'icRadioActive' : 'icRadioInactive'
              }
              size={20}
            />
            <Text type="semiBold">{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View height={16} />

      <TouchableOpacity activeOpacity={0.8} onPress={handleReset}>
        <Text center type="semiBold" color="TEXT_STRESSED" size={16}>
          Reset Data
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

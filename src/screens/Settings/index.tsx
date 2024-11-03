import React from 'react';
import {View, Text, Icon} from '@components';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '@reduxhooks';
import {setTypeChart} from '@/redux/slice/setting/settingSlice';

const OPTION = [
  {type: 'pie', text: 'Pie Chart'},
  {type: 'bar', text: 'Bar Chart'},
];

const Settings = () => {
  const dispatch = useAppDispatch();
  const typeChart = useAppSelector(state => state.settingReducer.typeChart);

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
    </View>
  );
};

export default Settings;

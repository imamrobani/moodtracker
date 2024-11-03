import React from 'react';
import styles from './styles';
import {ButtonMood, Text, View} from '@components';
import {useAppDispatch} from '@reduxhooks';
import {setUpdateMood} from '@/redux/slice/mood/moodSlice';
import {showToastNative} from '@/utils';

const DATA: MoodType[] = ['happy', 'neutral', 'sad', 'stress'];

const Home = () => {
  const dispatch = useAppDispatch();

  const handlePress = (type: MoodType) => {
    dispatch(setUpdateMood(type));
    showToastNative('Your mood has been updated');
  };

  return (
    <View style={styles.page}>
      <Text type="semiBold" size={20}>
        How are you feeling right now?
      </Text>
      <View gap={16}>
        {DATA.map((item, index) => (
          <ButtonMood
            key={index}
            type={item}
            onPress={() => handlePress(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default Home;

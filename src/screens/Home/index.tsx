import React, {useEffect} from 'react';
import styles from './styles';

// components
import {ButtonMood, Header, View} from '@components';

// store
import {useAppDispatch} from '@reduxhooks';
import {getMoods, setUpdateMood} from '@slice/mood/moodSlice';
import {getTypeChart} from '@slice/setting/settingSlice';

// utils
import {showToastNative} from '@/utils';

const DATA: MoodType[] = ['happy', 'neutral', 'sad', 'stress'];

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypeChart());
    dispatch(getMoods());
  }, []);

  const handlePress = (type: MoodType) => {
    dispatch(setUpdateMood(type));
    showToastNative('Your mood has been updated');
  };

  return (
    <View style={styles.page}>
      <Header label="How are you feeling right now?" />
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

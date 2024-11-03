import React, {useEffect} from 'react';
import styles from './styles';
import {ButtonMood, Text, View} from '@components';
import {useAppDispatch} from '@reduxhooks';
import {setMood} from '@slice/mood/moodSlice';

const DATA: MoodType[] = ['happy', 'neutral', 'sad', 'stress'];

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMood('happy'));
  }, []);

  return (
    <View style={styles.page}>
      <Text type="semiBold" size={20}>
        How are you feeling right now?
      </Text>
      <View gap={16}>
        {DATA.map((item, index) => (
          <ButtonMood key={index} type={item} />
        ))}
      </View>
    </View>
  );
};

export default Home;

import React, {useEffect} from 'react';
import {Icon, Text, View} from '@components';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text size={24} type="semiBold" color="GRAY_900">
        Mood Tracker
      </Text>
      <Icon name="icHappy" size={40} />
    </View>
  );
};

export default Splash;

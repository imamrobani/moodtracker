import React, {useEffect} from 'react';
import {Icon, Text, View} from '@components';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Text size={24} type="semiBold">
        Splash
      </Text>
      <Icon name="icHappy" />
    </View>
  );
};

export default Splash;

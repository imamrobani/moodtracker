import React from 'react';
import {Icon, Text, View} from '@components';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text fontSize={24} type="semiBold">
        Splash
      </Text>
      <Icon name="icHappy" />
    </View>
  );
};

export default Splash;

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from '../View';
import Text from '../Text';
import styles from './styles';
import {scale} from '@/utils';

type Props = {
  label: string;
};

const Header: React.FC<Props> = ({label}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top ? insets.top : scale(8)},
      ]}>
      <Text type="semiBold" size={20}>
        {label}
      </Text>
    </View>
  );
};

export default Header;

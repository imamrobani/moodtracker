import React from 'react';
import View from '../View';
import Text from '../Text';
import {scale} from '@/utils';

type Props = {
  label: string;
};

const Header: React.FC<Props> = ({label}) => {
  return (
    <View height={scale(64)} alignItems="center" justifyContent="center">
      <Text type="semiBold" size={20}>
        {label}
      </Text>
    </View>
  );
};

export default Header;

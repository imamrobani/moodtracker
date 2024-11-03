import {StyleSheet} from 'react-native';
import {deviceWidth, scale} from '@/utils';
import {Colors} from '@/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 8,
    height: scale(52),
    width: deviceWidth / 2 - 16 - 8,
    paddingHorizontal: scale(12),
    paddingVertical: scale(16),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

export default styles;

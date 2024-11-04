import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    elevation: 3,
    borderRadius: 8,
    height: scale(234),
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

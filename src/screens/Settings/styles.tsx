import {StyleSheet} from 'react-native';
import {scale} from '@/utils';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: scale(16),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default styles;

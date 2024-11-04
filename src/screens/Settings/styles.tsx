import {scale} from '@/utils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: scale(16),
    // gap: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default styles;

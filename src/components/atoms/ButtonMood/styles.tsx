import {StyleSheet} from 'react-native';
import {scale} from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: scale(24),
    paddingVertical: scale(20),
    gap: 16,
    alignItems: 'center',
  },
});

export default styles;

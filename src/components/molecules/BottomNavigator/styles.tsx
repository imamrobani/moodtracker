import {Platform, StyleSheet} from 'react-native';
import {Colors, Fonts} from '@constants';
import {scale} from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: scale(16),
    paddingBottom: scale(8),
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: 'white',
      },
    }),
  },
  contentContainer: {
    alignItems: 'center',
    gap: scale(8),
  },
  indicator: {
    position: 'absolute',
    top: scale(-16),
    height: 3,
    width: 50,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  activeTab: {
    fontSize: scale(12),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: 'blue',
  },
  inActiveTab: {
    fontSize: scale(12),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.BLACK,
  },
});

export default styles;

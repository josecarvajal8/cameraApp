import {StyleSheet, Platform} from 'react-native';
import {colors, fonts, getFontSizes} from '../../constants/foundations';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  cameraBtn: {
    padding: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: colors.common_white,
    ...Platform.select({
      android: {
        elevation: 5,
        bottom: 110,
        right: 20,
      },
      ios: {
        bottom: 130,
        right: 20,
        shadowColor: colors.common_black,
        shadowOffset: {
          width: 3,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  emptyState: {
    fontFamily: fonts.light,
    ...getFontSizes('display'),
    color: colors.accent_dark,
    textAlign: 'center',
  },
});

import {Platform, StyleSheet} from 'react-native';
import {colors, fonts, getFontSizes} from '../../../constants/foundations';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navbarContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.semibold,
    ...getFontSizes('display'),
    color: colors.common_black,
  },
  defaultBox: {
    height: 24,
    width: 24,
  },
  btn: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.common_white,
    shadowColor: colors.common_black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
});

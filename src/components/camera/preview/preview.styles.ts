import {StyleSheet, Platform} from 'react-native';
import {colors, fonts, getFontSizes} from '../../../constants/foundations';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  img: {
    width: 350,
    height: 500,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  buttonStyle: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 15,
    width: 120,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
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
  containerActions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Platform.select({
      android: {
        marginTop: 20,
      },
    }),
  },
  btnTitle: {
    fontFamily: fonts.regular,
    color: colors.common_white,
    ...getFontSizes('body'),
  },
});

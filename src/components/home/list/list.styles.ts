import {StyleSheet, Platform} from 'react-native';
import {fonts, getFontSizes} from '../../../constants/foundations';

export const styles = StyleSheet.create({
  globalList: {
    ...Platform.select({
      ios: {
        marginBottom: 90,
      },
      android: {
        marginBottom: 80,
      },
    }),
  },
  list: {
    padding: 10,
    width: '100%',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  containerCard: {
    alignItems: 'center',
    padding: 10,
  },
  separator: {
    height: 10,
  },
  detailContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  containerItemDetail: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  textDetail: {
    fontFamily: fonts.regular,
    ...getFontSizes('caption'),
  },
});

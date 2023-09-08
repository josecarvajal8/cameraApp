import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../constants/foundations';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common_white,
    borderRadius: 8,
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
});

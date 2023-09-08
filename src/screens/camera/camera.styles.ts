import {StyleSheet, Dimensions, Platform} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  btnClose: {
    position: 'absolute',
    zIndex: 1,
    ...Platform.select({
      ios: {
        top: 24,
        left: 4,
      },
      android: {
        top: 10,
        left: 4,
      },
    }),
  },
  captureButton: {
    ...Platform.select({
      ios: {
        width: 40,
        height: 40,
        right: windowWidth / 5 + 24,
        top: 15,
      },
      android: {
        width: 60,
        height: 60,
        right: windowWidth / 5 + 15,
      },
    }),
  },
});

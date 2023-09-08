import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BaseLayout} from '../../components/layouts';
import {styles} from './home.styles';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/foundations';
import {useNavigation} from '@react-navigation/native';

Icon.loadFont();

export const Home: FC = () => {
  const navigation = useNavigation();
  const onOpenCamera = () => {
    navigation.navigate('Camera');
  };
  return (
    <BaseLayout title="Gallery">
      <View style={styles.container}>
        <Text>{'no photos yet'}</Text>
        <TouchableOpacity onPress={onOpenCamera} style={styles.cameraBtn}>
          <Icon name="camera" size={30} color={colors.accent_dark} />
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
};

import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BaseLayout} from '../../components/layouts';
import {styles} from './home.styles';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/foundations';
import {useNavigation} from '@react-navigation/native';
import {openSettings, request, PERMISSIONS} from 'react-native-permissions';
import {isIOS} from '../../constants/config';

Icon.loadFont();

export const Home: FC = () => {
  const navigation = useNavigation();
  const [isCameraPermissionGranted, setCameraPermissionGranted] =
    useState(false);
  useEffect(() => {
    checkPermissions();
  }, []);
  const checkPermissions = async () => {
    const cameraPermission = await requestCameraPermission();
    setCameraPermissionGranted(cameraPermission === 'granted');
  };

  const requestCameraPermission = async () => {
    return isIOS
      ? request(PERMISSIONS.IOS.CAMERA)
      : request(PERMISSIONS.ANDROID.CAMERA);
  };

  const onOpenCamera = () => {
    if (isCameraPermissionGranted) {
      navigation.navigate('Camera');
    } else {
      openSettings();
    }
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

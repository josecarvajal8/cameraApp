import React, {FC, useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BaseLayout} from '../../components/layouts';
import {styles} from './home.styles';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/foundations';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {openSettings, request, PERMISSIONS} from 'react-native-permissions';
import {isIOS} from '../../constants/config';
import RNFS, {ReadDirItem} from 'react-native-fs';
import {List} from '../../components/home';

Icon.loadFont();

export const Home: FC = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState<ReadDirItem[]>([]);
  const [isCameraPermissionGranted, setCameraPermissionGranted] =
    useState(false);
  useEffect(() => {
    checkPermissions();
  }, []);
  useFocusEffect(
    useCallback(() => {
      loadImages();
    }, []),
  );
  const checkPermissions = async () => {
    const cameraPermission = await requestCameraPermission();
    setCameraPermissionGranted(cameraPermission === 'granted');
  };

  const requestCameraPermission = async () => {
    return isIOS
      ? request(PERMISSIONS.IOS.CAMERA)
      : request(PERMISSIONS.ANDROID.CAMERA);
  };

  const loadImages = async () => {
    try {
      const imageDirectory = RNFS.DocumentDirectoryPath;
      const files = await RNFS.readDir(imageDirectory);
      const imageFiles = files.filter(
        (file: any) =>
          file.name.toLowerCase().endsWith('.jpg') ||
          file.name.toLowerCase().endsWith('.png'),
      );

      setImages(imageFiles);
    } catch (error) {
      console.error('Error loading images:', error);
    }
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
        {images.length ? (
          <List images={images} />
        ) : (
          <Text style={styles.emptyState}>
            {'Nothing here yet. Start taking some pictures'}
          </Text>
        )}
        <TouchableOpacity onPress={onOpenCamera} style={styles.cameraBtn}>
          <Icon name="camera" size={30} color={colors.accent_dark} />
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
};

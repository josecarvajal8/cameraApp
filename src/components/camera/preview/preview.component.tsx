import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../../layouts';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './preview.styles';
import {colors} from '../../../constants/foundations';
import {isIOS} from '../../../constants/config';
import {request, PERMISSIONS} from 'react-native-permissions';
interface PreviewProps {
  imgUri: string;
  onSave: () => void;
  onDecline: () => void;
}
const ButtonAction: FC<{
  action: () => void;
  title: string;
  color: string;
  disabled?: boolean;
}> = ({action, title, color, disabled = false}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.buttonStyle, backgroundColor: color}}
      onPress={action}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
export const Preview: FC<PreviewProps> = ({imgUri, onDecline, onSave}) => {
  const [isSavePermissionsGranted, setSavePermissionsGranted] =
    useState<boolean>(false);
  useEffect(() => {
    requestWriteExternalStoragePermission();
  }, []);
  const requestWriteExternalStoragePermission = async () => {
    if (!isIOS) {
      const writePermission = await request(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      const readPermission = await request(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );

      if (writePermission === 'granted' && readPermission === 'granted') {
        setSavePermissionsGranted(true);
      } else {
        setSavePermissionsGranted(false);
      }
    } else {
      setSavePermissionsGranted(true);
    }
  };
  return (
    <BaseLayout title="Preview">
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: imgUri}} />
        <View style={styles.containerActions}>
          <ButtonAction
            action={onDecline}
            color={colors.decline_red}
            title="Decline"
          />
          <ButtonAction
            action={onSave}
            color={colors.primary}
            title="Save"
            disabled={!isSavePermissionsGranted}
          />
        </View>
      </View>
    </BaseLayout>
  );
};

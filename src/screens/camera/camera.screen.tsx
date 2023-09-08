import React, {FC, useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import {styles} from './camera.styles';
import {isIOS} from '../../constants/config';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/foundations';
import {useNavigation} from '@react-navigation/native';
import {Preview} from '../../components/camera';

Icon.loadFont();

const img = isIOS
  ? require('../../../assets/images/capture.png')
  : require('../../../assets/images/capture_android.png');
const iconBtnCloseColor = isIOS ? colors.common_white : colors.common_black;
const iconSize = isIOS ? 40 : 50;

export const Camera: FC = () => {
  const [captureUri, setCaptureUri] = useState<string>('');
  const [imgName, setImageName] = useState<string>('');
  const navigation = useNavigation();
  const onCapture = (event: any) => {
    if (event.type === 'capture') {
      setCaptureUri(event.image?.uri);
      setImageName(event.image?.name);
    }
  };
  const onCloseCamera = () => navigation.goBack();
  const decline = () => setCaptureUri('');
  const save = async () => {
    try {
      const destinationPath = `${RNFS.DocumentDirectoryPath}/${imgName}`;
      await RNFS.copyFile(captureUri, destinationPath);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {captureUri ? (
        <Preview imgUri={captureUri} onDecline={decline} onSave={save} />
      ) : (
        <>
          <StatusBar barStyle={'light-content'} />
          <TouchableOpacity style={styles.btnClose} onPress={onCloseCamera}>
            <Icon name="x-circle" color={iconBtnCloseColor} size={iconSize} />
          </TouchableOpacity>
          <CameraScreen
            onBottomButtonPressed={onCapture}
            captureButtonImageStyle={styles.captureButton}
            captureButtonImage={img}
          />
        </>
      )}
    </>
  );
};

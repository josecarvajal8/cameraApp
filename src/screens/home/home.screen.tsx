import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {BaseLayout} from '../../components/layouts';
import {styles} from './home.styles';
import {CameraScreen} from 'react-native-camera-kit';
const img = require('../../../assets/images/flip.png');
export const Home: FC = () => {
  const iconsSize = {width: 24, height: 24};
  return (
    // <BaseLayout title="Gallery" leftCallBack={() => null}>
    //   <View style={styles.container}>
    //     <Text>{'no photos yet'}</Text>
    //   </View>
    // </BaseLayout>
    // <CameraScreen
    //   cameraFlipImage={img}
    //   cameraFlipImageStyle={{}}
    //   captureButtonImage={img}
    //   cameraRatioOverlay={null}
    //   captureButtonImageStyle={iconsSize}
    //   frameColor={'#fff'}
    //   hideControls={false}
    //   laserColor={false}
    //   onBottomButtonPressed={e => console.log('hi', e)}
    //   onReadCode={() => null}
    //   scanBarcode={null}
    //   showFrame={false}
    //   torchImageStyle={iconsSize}
    //   torchOffImage={img}
    //   torchOnImage={img}
    // />
    <CameraScreen
      onBottomButtonPressed={event => console.log('hi', event)}
      hideControls={false}
      captureButtonImage={img}
    />
  );
};

import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {BaseLayout} from '../../components/layouts';
import {styles} from './home.styles';
export const Home: FC = () => {
  return (
    <BaseLayout title="Gallery" leftCallBack={() => null}>
      <View style={styles.container}>
        <Text>{'no photos yet'}</Text>
      </View>
    </BaseLayout>
  );
};

import React, {FC} from 'react';
import {BaseLayout} from '../../layouts';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './preview.styles';
import {colors} from '../../../constants/foundations';
interface PreviewProps {
  imgUri: string;
  onSave: () => void;
  onDecline: () => void;
}
const ButtonAction: FC<{action: () => void; title: string; color: string}> = ({
  action,
  title,
  color,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonStyle, backgroundColor: color}}
      onPress={action}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
export const Preview: FC<PreviewProps> = ({imgUri, onDecline, onSave}) => {
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
          <ButtonAction action={onSave} color={colors.primary} title="Save" />
        </View>
      </View>
    </BaseLayout>
  );
};

import React, {FC} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './base-layout.styles';
import {colors} from '../../../constants/foundations';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
  leftCallBack?: () => void;
}
const navBarButtons = (onPress: () => void) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Icon name={'arrow-left'} size={24} color={colors.common_black} />
    </TouchableOpacity>
  );
};
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  title,
  leftCallBack,
}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={'dark-content'}
        />
        <View style={styles.navbarContent}>
          {leftCallBack ? (
            navBarButtons(leftCallBack)
          ) : (
            <View style={styles.defaultBox} />
          )}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.defaultBox} />
        </View>
      </SafeAreaView>
      {children}
    </View>
  );
};

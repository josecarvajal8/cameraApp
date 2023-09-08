import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './card.styles';
interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
export const Card: FC<CardProps> = ({backgroundColor, children}) => {
  const cardStyles = backgroundColor
    ? {...styles.container, backgroundColor}
    : styles.container;
  return <View style={cardStyles}>{children}</View>;
};

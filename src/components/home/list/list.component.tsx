import React, {FC} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {ReadDirItem} from 'react-native-fs';
import {Card} from '../../common';
import {styles} from './list.styles';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../../constants/foundations';
interface ListProps {
  images: Array<ReadDirItem>;
}
const Detail: FC<{date: Date | string; size: number}> = ({date, size}) => {
  const originalDate = new Date(date);
  const formattedDate = originalDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedSize = `${(size / 1000).toFixed(2)} kb`;
  return (
    <View style={styles.detailContainer}>
      <View style={styles.containerItemDetail}>
        <Icon name="calendar" color={colors.primary} size={24} />
        <Text style={styles.textDetail}>{formattedDate}</Text>
      </View>
      <View style={styles.containerItemDetail}>
        <Icon name="box" color={colors.primary} size={24} />
        <Text style={styles.textDetail}>{formattedSize}</Text>
      </View>
    </View>
  );
};
export const List: FC<ListProps> = ({images}) => {
  const gap = () => <View style={styles.separator} />;
  return (
    <FlatList
      style={styles.globalList}
      showsVerticalScrollIndicator={false}
      data={images}
      contentContainerStyle={styles.list}
      keyExtractor={item => item.path}
      ItemSeparatorComponent={gap}
      renderItem={({item}) => {
        const {mtime = '', size, path} = item;
        return (
          <Card>
            <View style={styles.containerCard}>
              <Image source={{uri: 'file://' + path}} style={styles.image} />
              <Detail date={mtime} size={size} />
            </View>
          </Card>
        );
      }}
    />
  );
};

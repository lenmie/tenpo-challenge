import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import dimensions from '../../../constants/constants';
import icons from '../../../constants/icons';
interface Props {
  rating: number;
}

export default function Rating(props: Props) {
  const rating = Math.floor(props.rating);

  return (
    <View style={styles.container}>
      <Image style={styles.star} source={icons.star} />
      <Text style={styles.rating}>{props.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Gotham-Book',
  },
  star: {
    height: dimensions.favoriteItemContainerHeight * 0.05,
    width: dimensions.favoriteItemContainerWidth * 0.038,
    margin: 1,
  },
});

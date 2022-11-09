import React from 'react';
import { StyleSheet } from 'react-native';
import { Category } from '../../../interfaces/interfaces';
import {
  ImageBackground,
  Pressable,
  Text,
} from '../../components/baseComponents';

interface Props {
  item: Category;
}

const cardContainerWidth = 185;
const cardContainerHeight = 80;

export default function CategoryCarouselItem(props: Props) {
  const category = props.item;

  return (
    <Pressable activeOpacity={0.7}>
      <ImageBackground
        width={cardContainerWidth}
        height={cardContainerHeight}
        imageStyle={styles.imageStyle}
        alignItems="center"
        justifyContent="center"
        source={{ uri: category.imageSource }}
        resizeMode="cover">
        <Text
          fontSize={[3]}
          color="white"
          letterSpacing={1.5}
          fontFamily="Gotham-Bold">
          {category.name}
        </Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

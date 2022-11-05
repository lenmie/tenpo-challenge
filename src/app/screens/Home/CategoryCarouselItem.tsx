import React from 'react';
import Category from '../../../model/Category';
import {
  Container,
  ImageBackground,
  Pressable,
  Text,
} from '../../components/baseComponents';

interface Props {
  item: Category;
}

const cardContainerWidth = 180;
const cardContainerHeight = 100;

export default function CategoryCarouselItem(props: Props) {
  const category = props.item;

  return (
    <Pressable
      activeOpacity={0.7}
      width={cardContainerWidth}
      height={cardContainerHeight}>
      <ImageBackground
        flex={1}
        alignItems="center"
        justifyContent="center"
        source={category.imageSource}
        resizeMode="contain">
        <Container
          height="75%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          bg="rgba(0,0,0,0.1)"
          borderRadius={10}>
          <Text
            fontSize={[3]}
            color="white"
            letterSpacing={1.5}
            fontFamily="Gotham-Bold">
            {category.name}
          </Text>
        </Container>
      </ImageBackground>
    </Pressable>
  );
}

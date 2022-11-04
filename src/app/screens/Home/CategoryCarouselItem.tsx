import React from 'react';
import Category from '../../../model/Category';
import { Container } from '../../components/Container.styled';
import { ImageBackground } from '../../components/ImageBackground.styled';
import { Pressable } from '../../components/Pressable.styled';
import { Text } from '../../components/Text.styled';

interface Props {
  item: Category;
}

const cardContainerWidth = 160;
const cardContainerHeight = 80;

export default function CategoryCarouselItem(props: Props) {
  const category = props.item;

  return (
    <Pressable
      activeOpacity={0.7}
      width={cardContainerWidth}
      height={cardContainerHeight}>
      <ImageBackground
        mr={10}
        flex={1}
        alignItems="center"
        justifyContent="center"
        source={category.imageSource}
        resizeMode="contain">
        <Container
          height="82%"
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

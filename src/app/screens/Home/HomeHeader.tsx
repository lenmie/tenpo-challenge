import React from 'react';
import { Dimensions } from 'react-native';
import globals from '../../../constants/globals';
import { Container } from '../../components/Container.styled';
import { Image } from '../../components/Image.styled';
import { Pressable } from '../../components/Pressable.styled';

const { width } = Dimensions.get('screen');

export default function HomeHeader() {
  return (
    <Container
      width="100%"
      flexDirection="row"
      marginTop={10}
      height={width * 0.11}>
      <Pressable justifyContent="flex-end" alignItems="flex-end" flex={1}>
        <Image
          source={globals.images.ui.userIcon}
          height="100%"
          width={width * 0.11}
        />
      </Pressable>
      <Container flex={5} />
      <Pressable flex={0.8} justifyContent="center">
        <Image
          source={globals.images.ui.searchIcon}
          height={width * 0.075}
          width={width * 0.075}
        />
      </Pressable>
    </Container>
  );
}

import React from 'react';
import { Dimensions } from 'react-native';
import globals from '../../../constants/globals';
import { Container, Image } from '../../components/baseComponents';
const { width, height } = Dimensions.get('screen');

export default function HomeMainImage() {
  return (
    <Container flex={2} flexDirection="row">
      <Image
        mb={-4}
        resizeMode="contain"
        source={globals.images.ui.handImage}
        height={height * 0.25}
        width={width * 0.27}
      />
      <Container justifyContent="flex-end">
        <Image
          mb={2}
          source={globals.images.ui.dotsIcon}
          height={height * 0.008}
          width={width * 0.079}
        />
      </Container>
    </Container>
  );
}

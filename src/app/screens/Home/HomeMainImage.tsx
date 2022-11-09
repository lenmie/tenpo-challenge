import React from 'react';
import { Dimensions } from 'react-native';
import icons from '../../../constants/icons';
import { Container, Image } from '../../components/baseComponents';
const { width, height } = Dimensions.get('screen');

export default function HomeMainImage() {
  return (
    <Container mr={2} flexDirection="row">
      <Image
        mb={-4}
        resizeMode="contain"
        source={icons.handImage}
        height={height * 0.25}
        width={width * 0.27}
      />
      <Container justifyContent="flex-end">
        <Image
          resizeMode="contain"
          mb={2}
          source={icons.dots}
          height={height * 0.008}
          width={width * 0.079}
        />
      </Container>
    </Container>
  );
}

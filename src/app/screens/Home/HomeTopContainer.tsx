import React from 'react';
import { Box, Container, Text } from '../../components/baseComponents';
import AddDirectionButton from './AddDirectionButton';
import HomeHeader from './HomeHeader';
import HomeMainImage from './HomeMainImage';

export default function HomeTopContainer() {
  return (
    <Container flex={1} alignItems="center" justifyContent="center" bg="grey">
      <HomeHeader />
      <Container flex={1} width="100%" flexDirection="row">
        <Container flex={3} justifyContent="center">
          <Container ml={10}>
            <Text
              fontSize={[8]}
              color="black"
              textAlign="left"
              fontFamily="Roboto-Black">
              Tenpo
            </Text>
            <Text
              fontSize={[8]}
              lineHeight={42}
              textAlign="left"
              fontFamily="Roboto-Black"
              color="green.2">
              Eats
            </Text>
            <Text
              fontSize={12}
              letterSpacing={3}
              textAlign="left"
              color="black"
              fontFamily="Gotham-Bold">
              DELIVER APP
            </Text>
          </Container>
        </Container>
        <HomeMainImage />
      </Container>
      <Box
        width="100%"
        height={20}
        bg="green.0"
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
      />
      <Container height={60} width="100%" bg="green.0" alignItems="center">
        <AddDirectionButton />
      </Container>
      <Container
        position="absolute"
        bottom={0}
        width="100%"
        height={20}
        backgroundColor="white"
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
      />
    </Container>
  );
}

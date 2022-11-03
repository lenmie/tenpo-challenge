import React from 'react';
import { Box } from '../../components/Box';
import { Container } from '../../components/Container.styled';
import { Text } from '../../components/Text.styled';
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
              fontSize={[6]}
              color="black"
              textAlign="left"
              fontFamily="Roboto-Black">
              Tenpo
            </Text>
            <Text
              fontSize={[6]}
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
      <AddDirectionButton />
    </Container>
  );
}

import React from 'react';
import { Container, Text } from '../../components/baseComponents';

const MESSAGE =
  'En este momento no hay locales abiertos en el area de busqueda determinada.';
const SUBTITLE = "Lo sentimos"
export default function NoResultsMessage() {
  return (
    <Container flex={1}>
      <Container mt={150} mx={30} justifyContent="center" alignItems="center">
        <Text fontSize={[3]} color="green.2" fontFamily="Gotham-Bold">
          {SUBTITLE}
        </Text>
        <Text
          textAlign="center"
          fontSize={[6]}
          color="grey.1"
          fontFamily="Gotham-Light">
          {MESSAGE}
        </Text>
      </Container>
    </Container>
  );
}

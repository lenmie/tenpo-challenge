import React from 'react';
import { Container, Text } from '../../components/baseComponents';

export default function HomeTitle() {
  return (
    <Container ml={10}>
      <Text
        fontSize={42}
        color="black"
        textAlign="left"
        fontFamily="Roboto-Bold">
        Tenpo
      </Text>
      <Text
        fontSize={42}
        lineHeight={42}
        textAlign="left"
        fontFamily="Roboto-Bold"
        color="black">
        Eats
      </Text>
      <Text
        fontSize={12}
        letterSpacing={3}
        textAlign="left"
        fontFamily="Gotham-Bold">
        DELIVER APP
      </Text>
    </Container>
  );
}

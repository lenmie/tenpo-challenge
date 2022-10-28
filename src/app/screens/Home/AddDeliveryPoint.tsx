import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Title } from './AddDeliveryPoint.styled';

interface Props {
  onPress: Function;
}

export default function AddDeliveryPoint({ onPress }: Props) {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Title>Agregar direccion de entrega</Title>
      </TouchableOpacity>
    </Container>
  );
}
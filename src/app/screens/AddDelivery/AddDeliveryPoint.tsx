import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Title } from './AddDeliveryPoint.styled';

export default function AddDeliveryPoint() {
  return (
    <Container>
      <TouchableOpacity>
        <Title>Agregar direccion de entrega</Title>
      </TouchableOpacity>
    </Container>
  );
}

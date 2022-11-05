import { useNavigation } from '@react-navigation/native';
import React from 'react';
import globals from '../../../constants/globals';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';

export default function AddDirectionButton() {
  const navigation = useNavigation();

  return (
    <Container
      height={60}
      width="100%"
      backgroundColor="green.0"
      justifyContent="center"
      alignItems="center">
      <Pressable
        onPress={() => {
          navigation.push('AddDelivery');
        }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mb={34}>
        <Image mr={2} source={globals.images.ui.mapIcon} />
        <Text fontSize={[5]} fontFamily="Gotham-Light" color="green.1">
          Agregar direccion de entrega
        </Text>
      </Pressable>
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

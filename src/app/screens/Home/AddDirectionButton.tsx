import { useNavigation } from '@react-navigation/native';
import React from 'react';
import globals from '../../../constants/globals';
import { Image, Pressable, Text } from '../../components/baseComponents';

interface Props {
  disabled?: boolean;
}

export default function AddDirectionButton({ disabled = false }: Props) {
  const navigation = useNavigation();

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        navigation.push('AddDelivery');
      }}
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <Image mr={2} source={globals.images.ui.mapIcon} />
      <Text fontSize={[5]} fontFamily="Gotham-Light" color="green.1">
        Agregar direccion de entrega
      </Text>
    </Pressable>
  );
}

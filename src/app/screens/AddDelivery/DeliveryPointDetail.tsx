import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../constants/theme';
import { Container, Text } from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import { useDispatch, useStore } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';

const TILE = 'Agregar informacion de entrega';
const SUBTITLE = 'Depto, Oficina, Piso, Block';
const BUTTON = 'AGREGAR DIRECCION';

const textInputHeight = 100;

interface Props {
  onPress: Function;
}

export default function DeliveryPointDetail({ onPress }: Props) {
  const { extraAddress } = useStore();
  const [deliveryInfo, setDeliveryInfo] = useState<string>(extraAddress);
  const dispatch = useDispatch();
  const submitAddress = () => {
    dispatch({ type: types.setExtraAddress, payload: deliveryInfo });
    onPress();
  };

  return (
    <Container bg="white" height="100%" width="100%">
      <Container pl={15}>
        <Text mt={30} fontSize={[4]} fontFamily="Gotham-Bold" color="black">
          {TILE}
        </Text>
        <Text mt={1} fontSize={[3]} fontFamily="Gotham-Light" color="grey.1">
          {SUBTITLE}
        </Text>
      </Container>
      <Container pt={15} alignItems="center">
        <TextInput
          value={deliveryInfo}
          onChangeText={setDeliveryInfo}
          multiline
          width="92%"
          padding={3}
          borderColor="grey.3"
          borderWidth={1.5}
          borderRadius={18}
          height={textInputHeight}
          textAlignVertical="top"
          style={styles.textInput}
        />

        <TouchableOpacity
          style={styles.addDirectionButton}
          onPress={submitAddress}>
          <Text fontSize={[3]} fontFamily="Gotham-Bold" color="white">
            {BUTTON}
          </Text>
        </TouchableOpacity>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
  },
  addDirectionButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 30,
    height: 50,
    width: '80%',
    backgroundColor: theme.colors.green[2],
  },
});

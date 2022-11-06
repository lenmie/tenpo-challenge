import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { StackParamList } from '../../../navigation/AppNavigator';
import { Container } from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import AddDirectionButton from '../Home/AddDirectionButton';
import DeliveryPointDetail from './DeliveryPointDetail';
import MapContainer from './MapContainer';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const directionInputHeight = 70;
const DIRECTION_INPUT_PLACEHOLDER = 'Escribe tu direccion';
export default function AddDeliveryScreen({ navigation, route }: Props) {
  return (
    <Container width="100%">
      <Container
        height={90}
        width="100%"
        bg="green.0"
        alignItems="center"
        justifyContent="center">
        <AddDirectionButton disabled />
      </Container>
      <MapContainer />
      <Container top={70} width="100%" position="absolute">
        <TextInput
          textAlignVertical="center"
          style={styles.addDirectionInput}
          placeholder={DIRECTION_INPUT_PLACEHOLDER}
        />
      </Container>
      <DeliveryPointDetail />
    </Container>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
    fontSize: 16,
    fontFamily: 'Gotham-Light',
    color: theme.colors.green[1],
  },
});

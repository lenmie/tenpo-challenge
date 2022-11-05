import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StackParamList } from '../../../navigation/AppNavigator';
// import AddDeliveryPoint from './AddDeliveryPoint';
import { Container } from './AddDeliveryScreen.styled';
import DeliveryPointDetail from './DeliveryPointDetail';
import MapContainer from './MapContainer';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export default function AddDeliveryScreen({ navigation, route }: Props) {
  return (
    <Container>
      {/* <AddDeliveryPoint /> */}
      <MapContainer />
      <DeliveryPointDetail />
    </Container>
  );
}

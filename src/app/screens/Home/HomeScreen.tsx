import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { StackParamList } from '../../../navigation/AppNavigator';
import AddDeliveryPoint from './AddDeliveryPoint';
import HomeMenu from './HomeMenu';
import { Container } from './HomeScreen.styled';
import HomeTitle from './HomeTitle';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: Props) {

  const toAddDeliveryScren = () => {
    navigation.push('AddDelivery')
  }
  return (
    <Container>
      <HomeTitle />
      <AddDeliveryPoint onPress={toAddDeliveryScren} />
      <HomeMenu />
      <Text>carlos</Text>
    </Container>
  );
}

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {StackParamList} from '../../navigation/AppNavigator';
import {Container} from './HomeScreen.styled';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export default function HomeScreen({navigation, route}: Props) {
  return (
    <Container>
      <Text>carlos</Text>
    </Container>
  );
}

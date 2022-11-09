import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Resto } from '../../../interfaces/interfaces';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';
import { SearchRestoScreenNavigationProp } from './SearchRestoScreen';

interface Props {
  item: Resto;
}

export default function SearchRestoListRow({ item }: Props) {
  const navigation = useNavigation<SearchRestoScreenNavigationProp>();

  const onPress = () => {
    navigation.push('RestoDetail', { resto: item });
  };

  return (
    <Pressable
      onPress={onPress}
      alignItems="center"
      my={10}
      height={70}
      width="100%"
      flexDirection="row">
      <Image
        borderRadius={10}
        resizeMode="contain"
        width={50}
        height={50}
        mx={10}
        source={{ uri: item.logoImageSource }}
      />
      <Container>
        <Text fontSize={[4]} color="black" fontFamily="Roboto-Regular">
          {item.name}
        </Text>
        <Text fontSize={[2]} color="grey.1" fontFamily="Roboto-Regular">
          {item.location}
        </Text>
      </Container>
    </Pressable>
  );
}

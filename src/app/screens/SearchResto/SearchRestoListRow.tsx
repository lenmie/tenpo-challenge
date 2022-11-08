import React from 'react';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';

interface Props {
  item: {
    name: string;
    location: string;
    logoImageSource: string;
  };
}

export default function SearchRestoListRow({ item }: Props) {
  return (
    <Pressable
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

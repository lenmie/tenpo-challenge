import React from 'react';
import { Pressable, Text } from '../../components/baseComponents';

interface Props {
  address: string;
  name: string;
}

const rowHeight = 80;

export default function AddressRow({ address, name }: Props) {
  return (
    <Pressable bg="white" height={rowHeight} width="100%" pl={3} pt={3}>
      <Text mt={1} fontSize={[5]} color="black" fontFamily="Gotham-Book">
        {name}
      </Text>
      <Text
        numberOfLines={1}
        mt={1}
        pr={2}
        fontSize={[3]}
        color="grey.1"
        fontFamily="Gotham-Light">
        {address}
      </Text>
    </Pressable>
  );
}

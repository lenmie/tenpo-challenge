import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Location } from '../../../interfaces/interfaces';
import { Pressable, Text } from '../../components/baseComponents';
import { useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { AddAddressScreenNavigationProp } from './AddAddressScreen';

interface Props {
  address: string;
  name: string;
  location: Location;
}

const rowHeight = 80;

export default function AddressRow({ address, name, location }: Props) {
  const navigation = useNavigation<AddAddressScreenNavigationProp>();
  const dispatch = useDispatch();

  const setLocation = () => {
    dispatch({
      type: types.setLocation,
      payload: { latitude: location.lat, longitude: location.lng },
    });
    dispatch({ type: types.setAddress, payload: address });
    navigation.pop();
  };

  return (
    <Pressable
      bg="white"
      height={rowHeight}
      width="100%"
      pl={3}
      pt={3}
      onPress={setLocation}>
      <Text
        numberOfLines={1}
        mt={1}
        fontSize={[5]}
        color="black"
        fontFamily="Gotham-Book">
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

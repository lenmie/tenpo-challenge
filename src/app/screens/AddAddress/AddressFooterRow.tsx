import { useNavigation } from '@react-navigation/native';
import React from 'react';
import icons from '../../../constants/icons';
import { Image, Pressable, Text } from '../../components/baseComponents';
import { useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { AddAddressScreenNavigationProp } from './AddAddressScreen';

const rowHeight = 80;
const iconSize = 22;
const TITLE = 'Buscar por ubicacion';

export default function AddressFooterRow() {
  const navigation = useNavigation<AddAddressScreenNavigationProp>();
  const dispatch = useDispatch();

  const setLocation = () => {
    dispatch({ type: types.enableSearchByPosition });
    navigation.pop();
  };

  return (
    <Pressable
      bg="white"
      height={rowHeight}
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      onPress={setLocation}>
      <Image width={iconSize} height={iconSize} source={icons.target3} />
      <Text ml={2} fontSize={[3]} color="green.2" fontFamily="Gotham-Book">
        {TITLE}
      </Text>
    </Pressable>
  );
}

import React from 'react';

import icons from '../../../constants/icons';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';

const OPEN_STORES = 'Solo locales abiertos';
const SEARCH_AREA = 'Area de Busqueda:';

const filterContainerHeight = 120;

interface Props {
  area: number;
  modalActive: boolean;
  openStoresFilter: boolean;
  toggleOpenStoresFilter: Function;
  handlePresentModalPress: Function;
}

export default function FilterBar({
  area,
  modalActive,
  openStoresFilter,
  toggleOpenStoresFilter,
  handlePresentModalPress,
}: Props) {
  return (
    <Container
      bg="grey.2"
      height={filterContainerHeight}
      pt={40}
      justifyContent="space-around"
      alignItems="center"
      flexDirection="row">
      <Pressable
        disabled={modalActive}
        opacity={openStoresFilter ? 1 : 0.2}
        onPress={toggleOpenStoresFilter}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        borderColor="green.1"
        borderWidth={1}
        borderRadius={5}
        height={40}
        width={180}>
        <Text fontSize={[2]} fontFamily="Gotham-Light" color="green.1">
          {OPEN_STORES}
        </Text>
        <Image height={22} width={22} ml={1} source={icons.check} />
      </Pressable>

      <Pressable
        disabled={modalActive}
        onPress={handlePresentModalPress}
        justifyContent="center"
        alignItems="center"
        borderColor="green.1"
        borderWidth={1}
        borderRadius={5}
        height={40}
        width={180}>
        <Text fontSize={[2]} fontFamily="Gotham-Light" color="green.1">
          {SEARCH_AREA}
          <Text fontFamily="Gotham-Bold" color="green.1">
            {`${area} KM`}
          </Text>
        </Text>
      </Pressable>
    </Container>
  );
}

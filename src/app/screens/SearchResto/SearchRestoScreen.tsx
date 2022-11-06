import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import icons from '../../../constants/icons';
import { theme } from '../../../constants/theme';
import { StackParamList } from '../../../navigation/AppNavigator';
import { RestoService } from '../../../services/RestoService';
import {
  Box,
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import SearchRestoListRow from './SearchRestoListRow';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const NEAR_YOU_LOCATION = 'Tu ubicacion cercana';
const DIRECTION_PLACEHOLDER = 'Calle Agustinas #546';
const DIRECTION_INPUT_PLACEHOLDER = 'Escribe tu direccion';
const OPEN_STORES = 'Solo locales abiertos';
const SEARCH_AREA = 'Area de Busqueda:';

const directionInputHeight = 70;
const headerHeight = 150;
const filterContainerHeight = 120;
const inputOffset = 30;

export default function SearchRestoScreen({ navigation, route }: Props) {
  const [areaKm, setAreaKm] = useState(1);
  const [openStoresFilter, setOpenStoresFilter] = useState(true);
  const [results, setResults] = useState([]);

  const mockSearch = () => RestoService.getRestos().then(setResults);

  return (
    <Container width="100%" height="100%" bg="white">
      <Container
        height={headerHeight}
        width="100%"
        bg="green.0"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px={18}>
        <Container flexDirection="row">
          <Pressable
            onPress={() => navigation.pop()}
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
            <Image height={22} width={22} mr={3} source={icons.leftArrow} />
          </Pressable>
          <Container>
            <Text fontSize={[1]} fontFamily="Gotham-Bold" color="green.3">
              {NEAR_YOU_LOCATION}
            </Text>
            <Text fontSize={[5]} fontFamily="Gotham-Light" color="green.1">
              {DIRECTION_PLACEHOLDER}
            </Text>
          </Container>
        </Container>

        <Pressable
          onPress={() => navigation.push('AddDelivery')}
          justifyContent="center"
          alignItems="center"
          height={60}
          width={60}>
          <Image height={50} width={50} source={icons.target} />
        </Pressable>
      </Container>

      <Container
        bg="grey.2"
        height={filterContainerHeight}
        pt={40}
        justifyContent="space-around"
        alignItems="center"
        flexDirection="row">
        <Pressable
          opacity={openStoresFilter ? 1 : 0.2}
          onPress={() => setOpenStoresFilter(!openStoresFilter)}
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
              {`${areaKm} KM`}
            </Text>
          </Text>
        </Pressable>
      </Container>

      <Container style={styles.addDirectionInput}>
        <TextInput
          textAlignVertical="center"
          fontFamily="Gotham-Light"
          color="black"
          width="85%"
          fontSize={16}
          placeholder={DIRECTION_INPUT_PLACEHOLDER}
        />
      </Container>

      <Container
        right={10}
        top={headerHeight - inputOffset}
        position="absolute">
        <Pressable
          onPress={mockSearch}
          justifyContent="center"
          alignItems="center"
          height={70}
          width={70}>
          <Image height={32} width={32} source={icons.search} />
        </Pressable>
      </Container>

      {!openStoresFilter && (
        <Container flex={1}>
          <Container
            mt={150}
            mx={30}
            justifyContent="center"
            alignItems="center">
            <Text fontSize={[3]} color="green.2" fontFamily="Gotham-Bold">
              Lo sentimos
            </Text>
            <Text
              textAlign="center"
              fontSize={[6]}
              color="grey.1"
              fontFamily="Gotham-Light">
              En este momento no hay locales abiertos en el area de busqueda
              determinada.
            </Text>
          </Container>
        </Container>
      )}

      {openStoresFilter && !!results.length && (
        <FlatList
          data={results}
          ItemSeparatorComponent={() => (
            <Box borderWidth={0.5} borderColor="grey.2" width="100%" />
          )}
          renderItem={({ item }) => (
            <Container
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
                source={item.logoImageSource}
              />
              <Container>
                <Text fontSize={[4]} color="black" fontFamily="Roboto-Regular">
                  {item.name}
                </Text>
                <Text fontSize={[2]} color="grey.1" fontFamily="Roboto-Regular">
                  {item.location}
                </Text>
              </Container>
            </Container>
          )}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    top: headerHeight - inputOffset,
    position: 'absolute',
    padding: 15,
    borderRadius: 50,
    elevation: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
  },
});

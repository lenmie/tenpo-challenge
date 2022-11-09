import { useNavigation } from '@react-navigation/native';
import React from 'react';
import icons from '../../../constants/icons';
import {
  Box,
  Container,
  Image,
  Text,
  Pressable,
} from '../../components/baseComponents';
import { useStore } from '../../store/StoreProvider';
import HomeHeader from './HomeHeader';
import HomeMainImage from './HomeMainImage';
import { HomeScreenNavigationProp } from './HomeScreen';

const ADDRESS_SUBTITLE = 'Enviaremos tus pedidos a';

export default function HomeTopContainer() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { address } = useStore();

  const title = address ? address : 'Agregar direccion de entrega';

  return (
    <Container flex={1} alignItems="center" justifyContent="center" bg="grey">
      <HomeHeader />
      <Container flex={1} width="100%" flexDirection="row">
        <Container flex={3} justifyContent="center">
          <Container ml={10}>
            <Text
              fontSize={[8]}
              color="black"
              textAlign="left"
              fontFamily="Roboto-Black">
              Tenpo
            </Text>
            <Text
              fontSize={[8]}
              lineHeight={42}
              textAlign="left"
              fontFamily="Roboto-Black"
              color="green.2">
              Eats
            </Text>
            <Text
              fontSize={12}
              letterSpacing={3}
              textAlign="left"
              color="black"
              fontFamily="Gotham-Bold">
              DELIVER APP
            </Text>
          </Container>
        </Container>
        <HomeMainImage />
      </Container>
      <Box
        width="100%"
        height={20}
        bg="green.0"
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
      />
      <Container height={65} width="100%" bg="green.0" alignItems="center">
        <Pressable
          width="80%"
          onPress={() => {
            navigation.push('AddDelivery');
          }}
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Image mr={2} source={icons.map} height={28} width={25} />
          {!!address ? (
            <Container>
              <Text
                numberOfLines={1}
                fontSize={[0]}
                fontFamily="Gotham-Medium"
                color="green.1">
                {ADDRESS_SUBTITLE}
              </Text>
              <Text
                numberOfLines={1}
                fontSize={[5]}
                fontFamily="Gotham-Light"
                color="green.1">
                {title}
              </Text>
            </Container>
          ) : (
            <Text
              numberOfLines={1}
              fontSize={[5]}
              fontFamily="Gotham-Light"
              color="green.1">
              {title}
            </Text>
          )}
        </Pressable>
      </Container>
      <Container
        position="absolute"
        bottom={0}
        width="100%"
        height={20}
        backgroundColor="white"
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
      />
    </Container>
  );
}

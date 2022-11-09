import { useNavigation } from '@react-navigation/native';
import React from 'react';
import icons from '../../../constants/icons';
import { Resto } from '../../../interfaces/interfaces';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';
import { HomeScreenNavigationProp } from './HomeScreen';

interface Props {
  item: Resto;
}
const DCTO = 'DCTO';

const containerHeight = 115;
const containerWidth = 168;

export default function RestoCarouselItem(props: Props) {
  const resto = props.item;
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onPress = () => {
    navigation.push('RestoDetail', { resto: resto });
  };

  return (
    <Pressable
      onPress={onPress}
      width={containerHeight}
      height={containerWidth}
      alignItems="center"
      activeOpacity={0.8}>
      <Container height={110} width={110}>
        <Image
          height="98%"
          width="98%"
          borderRadius={10}
          position="absolute"
          top={5}
          right={4}
          overflow="hidden"
          source={{ uri: resto.logoImageSource }}
          resizeMode="contain"
        />
        {!!resto.discount && (
          <Container
            backgroundColor="green.2"
            width="30%"
            height="30%"
            position="absolute"
            right={0}
            top={0}
            borderRadius={20}
            justifyContent="center"
            alignItems="center">
            <Text
              fontSize={[1]}
              color="white"
              textAlign="center"
              fontFamily="Gotham-Light">{`${resto.discount}%`}</Text>
            <Text
              fontSize={[0]}
              color="white"
              textAlign="center"
              fontFamily="Gotham-Light">
              {DCTO}
            </Text>
          </Container>
        )}
      </Container>
      <Container
        ml={-3}
        mt={1}
        height={35}
        width={110}
        justifyContent="space-around">
        <Text
          fontSize={[3]}
          textAlign="center"
          color="black"
          fontFamily="Gotham-Book">
          {resto.name}
        </Text>
        <Container flexDirection="row" justifyContent="space-around">
          <Container mr={1} flexDirection="row">
            <Image height={12} width={12} source={icons.star} />
            <Text fontSize={[2]} color="black" fontFamily="Gotham-Book">
              {resto.rating}
            </Text>
          </Container>
          <Text fontSize={[2]} color="black" fontFamily="Gotham-Book">
            {`${resto.timeAproxMin}-${resto.timeAproxMax} min.`}
          </Text>
        </Container>
      </Container>
    </Pressable>
  );
}

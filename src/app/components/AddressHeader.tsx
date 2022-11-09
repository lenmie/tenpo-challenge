import { useNavigation } from '@react-navigation/native';
import React from 'react';
import icons from '../../constants/icons';
import { Container, Image, Pressable, Text } from './baseComponents';
import { useStore } from '../store/StoreProvider';

const NEAR_YOU_LOCATION = 'Tu ubicacion cercana';

const headerHeight = 140;
interface Props {
  modalActive?: boolean;
  ExtraComponent: React.ComponentType<any>;
}

export default function AddressHeader({ modalActive, ExtraComponent }: Props) {
  const { address } = useStore();
  const navigation = useNavigation();

  return (
    <Container
      height={headerHeight}
      width="100%"
      bg="green.0"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px={18}>
      <Container flexDirection="row" flex={6}>
        <Pressable
          disabled={modalActive}
          onPress={() => navigation.goBack()}
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Image height={22} width={22} mr={3} source={icons.leftArrow} />
        </Pressable>
        <Container width="85%">
          {address ? (
            <>
              <Text fontSize={[1]} fontFamily="Gotham-Bold" color="green.3">
                {NEAR_YOU_LOCATION}
              </Text>
              <Text
                numberOfLines={1}
                fontSize={[5]}
                fontFamily="Gotham-Light"
                color="green.1">
                {address}
              </Text>
            </>
          ) : null}
        </Container>
      </Container>
      <Container flex={1}>
        <ExtraComponent />
      </Container>
    </Container>
  );
}

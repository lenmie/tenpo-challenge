import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../constants/icons';
import {
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';
import AddressHeader from '../../components/AddressHeader';
import { StackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<StackParamList, 'RestoDetail'>;
export type RestoDetailScreenNavigationProp = Props['navigation'];

const CONTENT_PLACEHOLDER = 'Detalle del restaurante';
const imageSize = 150;

export default function RestoDetailScreen({ navigation, route }: Props) {
  const { resto } = route.params;

  return (
    <SafeAreaView>
      <Container width="100%" bg="green.0" height="100%">
        <AddressHeader
          ExtraComponent={() => (
            <Pressable
              onPress={() => navigation.navigate('SearchResto')}
              justifyContent="center"
              alignItems="center"
              height={70}
              width={70}>
              <Image height={32} width={32} source={icons.search} />
            </Pressable>
          )}
        />
        <Container
          width="100%"
          height={20}
          bg="white"
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
        />
        <Container
          bg="white"
          width="100%"
          flex={1}
          alignItems="center"
          justifyContent="space-between">
          <Container alignItems="center" justifyContent="center" mt={20}>
            <Image
              borderRadius={10}
              resizeMode="contain"
              width={imageSize}
              height={imageSize}
              source={{ uri: resto.logoImageSource }}
            />
            <Container alignItems="center" justifyContent="center">
              <Text
                mt={15}
                fontSize={[6]}
                color="black"
                fontFamily="Gotham-Bold">
                {resto.name}
              </Text>
              <Text
                mt={10}
                fontSize={[3]}
                color="grey.1"
                fontFamily="Gotham-Light">
                {resto.detail}
              </Text>
            </Container>
          </Container>
          <Text mb={200} fontSize={[6]} color="grey.1" fontFamily="Gotham-Book">
            {CONTENT_PLACEHOLDER}
          </Text>
        </Container>
      </Container>
    </SafeAreaView>
  );
}

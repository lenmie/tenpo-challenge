import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';
import icons from '../../../constants/icons';
import { Container, Image, Pressable } from '../../components/baseComponents';
import { HomeScreenNavigationProp } from './HomeScreen';

const { width } = Dimensions.get('screen');

export default function HomeHeader() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container
      width="100%"
      justifyContent="space-between"
      flexDirection="row"
      mt={10}
      height={width * 0.1}>
      <Pressable ml={10}>
        <Image
          resizeMode="contain"
          source={icons.user}
          height="100%"
          width={width * 0.1}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.push('SearchResto')}
        mr={10}
        height="100%">
        <Image
          mr={1}
          resizeMode="contain"
          source={icons.search}
          height="100%"
          width={30}
        />
      </Pressable>
    </Container>
  );
}

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';
import globals from '../../../constants/globals';
import icons from '../../../constants/icons';
import { Container, Image, Pressable } from '../../components/baseComponents';

const { width } = Dimensions.get('screen');

export default function HomeHeader() {
  const navigation = useNavigation();
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
          source={globals.images.ui.userIcon}
          height="100%"
          width={width * 0.1}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.push('SearchResto')}
        mr={10}
        height="100%">
        <Image
          mt={-2}
          resizeMode="contain"
          source={icons.search}
          height="100%"
          width={width * 0.06}
        />
      </Pressable>
    </Container>
  );
}

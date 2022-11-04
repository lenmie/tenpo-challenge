import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Favorite from '../../../model/Favorite';
import dimensions from '../../../constants/constants';
import { Text } from '../../components/Text.styled';
import { Container } from '../../components/Container.styled';
import { Image } from '../../components/Image.styled';
import icons from '../../../constants/icons';
import { ImageBackground } from '../../components/ImageBackground.styled';
import { Box } from '../../components/Box';

interface Props {
  item: Favorite;
}

export default function FavoriteCarouselItem(props: Props) {
  const favorite = props.item;

  return (
    <Container
      width={dimensions.favoriteItemContainerWidth}
      height={dimensions.favoriteItemContainerHeight}>
      <TouchableOpacity activeOpacity={0.7} style={styles.cardContainer}>
        <ImageBackground
          imageStyle={styles.backgroundImage}
          source={favorite.mealImageSource}
          flex={4}
          resizeMode="contain">
          <Container flexDirection="row" justifyContent="space-between" mt={2}>
            <Image
              source={favorite.logoImageSource}
              resizeMode="contain"
              height={40}
              width={40}
              ml={10}
              borderRadius={2}
            />
            <Box
              width="55%"
              height="18%"
              mr={2}
              bg="grey.2"
              borderRadius={10}
            />
          </Container>
        </ImageBackground>

        <Container flex={2.3} mx={2} justifyContent="flex-end">
          <Container mb={3}>
            <Text fontSize={[2]} color="black" fontFamily="Gotham-Book">
              {favorite.mealName}
            </Text>
            <Text
              mt={1}
              fontSize={[2]}
              color="green.2"
              fontFamily="Gotham-Bold">
              {favorite.chainName}
            </Text>
          </Container>
          <Container
            alignItems="flex-end"
            mb={3}
            position="absolute"
            bottom={0}
            right={0}>
            <Container
              flexDirection="row"
              justifyContent="center"
              alignItems="center">
              <Image margin={1} height={12} width={12} source={icons.star} />
              <Text fontSize={[2]} color="black" fontFamily="Gotham-Book">
                {favorite.rating}
              </Text>
            </Container>
            <Text fontSize={[2]} color="black" fontFamily="Gotham-Book">
              {`${favorite.timeAproxMin}-${favorite.timeAproxMax} min.`}
            </Text>
          </Container>
        </Container>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 2,
    width: '95%',
    height: '85%',
  },
  backgroundImage: {
    flex: 1,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
});

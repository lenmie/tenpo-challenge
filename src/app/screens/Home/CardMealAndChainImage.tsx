import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import dimensions from '../../../constants/constants';
import globals from '../../../constants/globals';

interface Props {
  mealImageSource: any;
  logoImageSource: any;
}

export default function CardMealAndChainImage(props: Props) {
  const { mealImageSource, logoImageSource } = props;

  return (
    <ImageBackground
      imageStyle={styles.backgroundImage}
      source={mealImageSource}
      style={styles.container}
      resizeMode="stretch">
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.logoImage}
          source={logoImageSource}
          resizeMode="contain"
        />
        <Image
          resizeMode="stretch"
          style={styles.rectangle2}
          source={globals.images.ui.rectangle2}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  backgroundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  backgroundImage: {
    flex: 1,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  logoImage: {
    height: dimensions.favoriteItemContainerHeight * 0.2,
    marginLeft: 10,
    borderRadius: 2,
  },
  rectangle2: {
    width: dimensions.favoriteItemContainerWidth * 0.5,
    marginHorizontal: 20,
  },
});

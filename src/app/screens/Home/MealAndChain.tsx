import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globals from '../../../constants/globals';

interface Props {
  mealName: string;
  chainName: string;
}

export default function MealAndChain(props: Props) {
  const { mealName, chainName } = props;

  return (
    <View>
      <Text style={styles.mealName}>{mealName}</Text>
      <Text style={styles.chainName}>{chainName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealName: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Gotham-Book',
  },
  chainName: {
    fontSize: 14,
    color: globals.colors.primary,
    fontFamily: 'Gotham-Bold',
  },
});

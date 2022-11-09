import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../constants/theme';
import { Container, Text } from '../../components/baseComponents';

const TRY_AGAIN = 'REINTENTAR';
const SUBTITLE = 'Lo sentimos';

const directionInputHeight = 70;
const headerHeight = 150;
const filterContainerHeight = 120;
const inputOffset = 30;

interface Props {
  onRetryPress: Function;
  message: string;
}

export default function RestoFetchErrorMessage({
  onRetryPress,
  message,
}: Props) {
  return (
    <Container flex={1}>
      <Container mt={150} mx={30} justifyContent="center" alignItems="center">
        <Text fontSize={[3]} color="green.2" fontFamily="Gotham-Bold">
          {SUBTITLE}
        </Text>
        <Text
          textAlign="center"
          fontSize={[5]}
          color="grey.1"
          fontFamily="Gotham-Light">
          {message}
        </Text>
        <TouchableOpacity
          style={styles.addDirectionButton}
          onPress={() => onRetryPress()}>
          <Text fontSize={[3]} fontFamily="Gotham-Bold" color="white">
            {TRY_AGAIN}
          </Text>
        </TouchableOpacity>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  addDirectionButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 30,
    height: 40,
    width: '70%',
    backgroundColor: theme.colors.green[2],
  },
});

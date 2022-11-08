import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../constants/theme';
import { Container, Text } from '../../components/baseComponents';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import icons from '../../../constants/icons';
import Geolocation from '@react-native-community/geolocation';

const APPLY = 'APLICAR';
const TITLE = 'Area de Busqueda';
const SUBTITLE =
  'Puedes modificar el radio de distancia para encontrar tu restaurante';

interface Props {
  setArea: Function;
}

export default function SearchAreaModalContent({ setArea }: Props) {
  const { dismissAll } = useBottomSheetModal();
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setCurrentPosition(position.coords);
    });
  }, []);

  return (
    <Container alignItems="center" bg="red" flex={1}>
      <Container
        px={20}
        bg="white"
        flex={2}
        width="100%"
        justifyContent="center"
        alignItems="center">
        <Text color="black" fontFamily="Gotham-Bold" fontSize={[6]}>
          {TITLE}
        </Text>
        <Text
          mt={2}
          color="grey.0"
          fontFamily="Gotham-Book"
          fontSize={[4]}
          textAlign="center">
          {SUBTITLE}
        </Text>
      </Container>
      <Container
        bg="grey.2"
        flex={1.5}
        width="100%"
        justifyContent="center"
        alignItems="center">
        <Text>barra</Text>
      </Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={
          currentPosition
            ? {
                latitude: currentPosition.latitude + 0.0001,
                longitude: currentPosition.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }
            : undefined
        }>
        {currentPosition ? (
          <Marker
            key={'key'}
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
            title={'title'}
            description={'description'}
            image={icons.star}
          />
        ) : null}
      </MapView>
      <TouchableOpacity style={styles.applyButton} onPress={dismissAll}>
        <Text fontSize={[3]} fontFamily="Gotham-Bold" color="white">
          {APPLY}
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  applyButton: {
    position: 'absolute',
    bottom: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 30,
    height: 60,
    width: '80%',
    backgroundColor: theme.colors.green[2],
  },
  //
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  contentContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  map: {
    flex: 6,
    width: '100%',
  },
});

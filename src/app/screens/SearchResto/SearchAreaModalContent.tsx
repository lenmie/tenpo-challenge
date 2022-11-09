import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../constants/theme';
import { Container, Text } from '../../components/baseComponents';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import icons from '../../../constants/icons';
import Geolocation from '@react-native-community/geolocation';
import AreaModalKMBar from './AreaModalKMBar';
import { calculateKmDeltaDegrees } from '../../utils/utils';
import { LocationLong } from '../../../interfaces/interfaces';

const APPLY = 'APLICAR';
const TITLE = 'Area de Busqueda';
const SUBTITLE =
  'Puedes modificar el radio de distancia para encontrar tu restaurante';

const circleRadiusPerKm = 500;

const areaCircleColor = 'rgba(0, 186, 164, 0.25)';

interface Props {
  setArea: Function;
  areaKm: number;
}

export default function SearchAreaModalContent({ setArea, areaKm }: Props) {
  const [buttonArea, setButtonArea] = useState(areaKm);

  const { dismissAll } = useBottomSheetModal();
  const [currentPosition, setCurrentPosition] = useState<LocationLong | null>(
    null,
  );

  const applyChanges = () => {
    dismissAll();
    setArea(buttonArea);
  };

  useEffect(() => {
    const backAction = () => {
      dismissAll();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [dismissAll]);

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setCurrentPosition(position.coords);
    });
  }, []);

  return (
    <Container alignItems="center" flex={1}>
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
        <AreaModalKMBar setArea={setButtonArea} area={buttonArea} />
      </Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={
          currentPosition
            ? calculateKmDeltaDegrees(currentPosition, buttonArea)
            : undefined
        }>
        {currentPosition ? (
          <>
            <Circle
              center={{
                latitude: currentPosition.latitude + 0.0008,
                longitude: currentPosition.longitude,
              }}
              radius={circleRadiusPerKm * buttonArea}
              fillColor={areaCircleColor}
              strokeColor="transparent"
            />

            <Marker
              key={'key'}
              coordinate={{
                latitude: currentPosition.latitude,
                longitude: currentPosition.longitude,
              }}
              image={icons.marker1}
            />
          </>
        ) : null}
      </MapView>
      <TouchableOpacity style={styles.applyButton} onPress={applyChanges}>
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
  },
  contentContainer: {
    height: '100%',
    alignItems: 'center',
  },
  map: {
    flex: 6,
    width: '100%',
  },
});

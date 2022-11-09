import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet } from 'react-native';
import icons from '../../../constants/icons';
import { Container } from '../../components/baseComponents';
import { LocationLong } from '../../../interfaces/interfaces';

interface Props {
  position: LocationLong;
  children: React.ReactNode;
}

export default function MapContainer({ position, children }: Props) {
  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: position.latitude + 0.001,
          longitude: position.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          key={'key'}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          title={'title'}
          description={'description'}
          image={icons.marker1}
        />
        {children}
      </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

import React from 'react';
import { AddressMap, Container } from './MapContainer.styled';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet } from 'react-native';
import icons from '../../../constants/icons';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function MapContainer(props) {
  const { position } = props;

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
        {props.children}
      </MapView>
    </Container>
  );
}

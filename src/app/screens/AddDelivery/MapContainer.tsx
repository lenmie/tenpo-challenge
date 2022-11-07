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
      {/* <AddressMap
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      /> */}
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: position.latitude + 0.00075,
          longitude: position.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          key={'carlos'}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          title={'title'}
          description={'description'}
          image={icons.star}
        />
        {props.children}
      </MapView>
    </Container>
  );
}

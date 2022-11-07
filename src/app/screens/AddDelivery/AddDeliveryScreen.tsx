import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { StackParamList } from '../../../navigation/AppNavigator';
import { Container, Text } from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import AddDirectionButton from '../Home/AddDirectionButton';
import DeliveryPointDetail from './DeliveryPointDetail';
import MapContainer from './MapContainer';
import { position } from 'styled-system';
import icons from '../../../constants/icons';
import { Marker } from 'react-native-maps';
import { MapsService } from '../../../services/MapsService';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const directionInputHeight = 70;
const DIRECTION_INPUT_PLACEHOLDER = 'Escribe tu direccion';
const WAITING_PERMISSION = 'Esperando tu ubicacion';
const PERMISSION_DENIED = 'Permite a Tenpo acceder a tu ubicacion para seguir';
export default function AddDeliveryScreen({ navigation, route }: Props) {
  const [grantedPermission, setGrantedPermission] = useState(false);
  const [waitingForPermission, setWaitingForPermission] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [address, setAdress] = useState(DIRECTION_INPUT_PLACEHOLDER);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(position => {
      setCurrentPosition(position.coords);
      getAdress(position.coords);
    });
  };

  const getAdress = async location => {
    MapsService.getLocationAddress(location.latitude, location.longitude).then(
      street => setAdress(street),
    );
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
        setGrantedPermission(true);
        setWaitingForPermission(false);
      } else {
        setGrantedPermission(false);
        setWaitingForPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Container width="100%">
      <Container
        height={90}
        width="100%"
        bg="green.0"
        alignItems="center"
        justifyContent="center">
        <AddDirectionButton disabled />
      </Container>
      {waitingForPermission && (
        <Text
          textAlign="center"
          fontSize={[5]}
          color="grey.1"
          fontFamily="Gotham-Light">
          {WAITING_PERMISSION}
        </Text>
      )}
      {!waitingForPermission && !grantedPermission && (
        <Text
          textAlign="center"
          fontSize={[5]}
          color="grey.1"
          fontFamily="Gotham-Light">
          {PERMISSION_DENIED}
        </Text>
      )}
      {!waitingForPermission && grantedPermission && !!currentPosition && (
        <MapContainer position={currentPosition} />
      )}
      <Container top={70} width="100%" position="absolute">
        <TextInput
          value={`${address.slice(0, 40)}...`}
          textAlignVertical="center"
          style={styles.addDirectionInput}
          placeholder={DIRECTION_INPUT_PLACEHOLDER}
        />
      </Container>
      <DeliveryPointDetail />
    </Container>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
    fontSize: 16,
    fontFamily: 'Gotham-Light',
    color: theme.colors.green[1],
  },
});

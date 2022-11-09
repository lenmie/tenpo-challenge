import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Geolocation from '@react-native-community/geolocation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { StackParamList } from '../../../navigation/AppNavigator';
import { Container, Image, Text } from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import DeliveryPointDetail from './DeliveryPointDetail';
import MapContainer from './MapContainer';
import { MapsService } from '../../../services/MapsService';
import { formatStreetString } from '../../utils/utils';
import globals from '../../../constants/globals';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useStore } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const directionInputHeight = 70;
const DIRECTION_INPUT_PLACEHOLDER = 'Escribe tu direccion';
const WAITING_PERMISSION = 'Esperando tu ubicacion';
const PERMISSION_DENIED = 'Permite a Tenpo acceder a tu ubicacion para seguir';
const TITLE = 'Agregar direccion de entrega';
const PERMISSION_TITLE =
  'Permitir que "Tenpo" acceda a tu ubicacion mientras usas la app?';
const PERMISSION_MESSAGE =
  'Tu ubicacion actual se mostrara en el mapa y se usara para las indicaciones, los resultados de busqueda y la hora aproximada de llegada';
const PERMISSION_NEGATIVE = 'No permitir';
const PERMISSION_POSITIVE = 'Permitir';

export default function AddDeliveryScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const { address, location, searchByPosition } = useStore();

  const [grantedPermission, setGrantedPermission] = useState(false);
  const [waitingForPermission, setWaitingForPermission] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(location);
  const [fetchedAddress, setFetchedAddress] = useState(address);

  useFocusEffect(
    useCallback(() => {
      setCurrentPosition(location);
      setFetchedAddress(address);
    }, [location, address, searchByPosition]),
  );

  useEffect(() => {
    requestLocationPermission();
  }, [searchByPosition]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(position => {
      setCurrentPosition(position.coords);
      getAdress(position.coords);
    });
    dispatch({ type: types.disableSearchByPosition });
  };

  const textInputRef = useRef(null);
  const getAdress = async location => {
    MapsService.getLocationAddress(location.latitude, location.longitude).then(
      street => {
        setFetchedAddress(street);
        textInputRef.current.blur();
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        setGrantedPermission(true);
        setWaitingForPermission(false);
        if (searchByPosition) getLocation();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: PERMISSION_TITLE,
            message: PERMISSION_MESSAGE,
            buttonNegative: PERMISSION_NEGATIVE,
            buttonPositive: PERMISSION_POSITIVE,
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          if (searchByPosition) getLocation();
          setGrantedPermission(true);
          setWaitingForPermission(false);
        } else {
          setGrantedPermission(false);
          setWaitingForPermission(false);
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView>
      <Container width="100%">
        <Container
          height={90}
          width="100%"
          bg="green.0"
          alignItems="center"
          justifyContent="center">
          <Container
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
            <Image mr={2} source={globals.images.ui.mapIcon} />
            <Text fontSize={[5]} fontFamily="Gotham-Light" color="green.1">
              {TITLE}
            </Text>
          </Container>
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
        {!waitingForPermission &&
          grantedPermission &&
          !!currentPosition?.latitude && (
            <MapContainer position={currentPosition} />
          )}
        <Container top={70} width="100%" position="absolute">
          <TextInput
            onFocus={() => navigation.push('AddAddress')}
            ref={textInputRef}
            value={formatStreetString(fetchedAddress)}
            textAlignVertical="center"
            style={styles.addDirectionInput}
            placeholder={DIRECTION_INPUT_PLACEHOLDER}
          />
        </Container>
        <DeliveryPointDetail
          onPress={() => {
            dispatch({ type: types.setLocation, payload: currentPosition });
            dispatch({ type: types.setAddress, payload: fetchedAddress });
            navigation.pop();
          }}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
    fontSize: 16,
    fontFamily: 'Gotham-Light',
    color: theme.colors.green[1],
  },
});

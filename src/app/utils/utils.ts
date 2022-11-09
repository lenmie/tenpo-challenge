import { LatLng } from 'react-native-maps';

export function formatStreetString(street: string | null): string | null {
  if (!street) return null;
  if (street.length < 39) return street;
  return `${street.slice(0, 40)}...`;
}

export function kmToDegrees(km: number) {
  const degreePerKM = 0.01;
  return km * degreePerKM;
}

export function calculateKmDeltaDegrees(position: LatLng, km: number) {
  const degreePerKM = 0.01;
  const extraMargin = 0.0015;
  return {
    latitude: position.latitude,
    longitude: position.longitude,
    latitudeDelta: degreePerKM * km + extraMargin,
    longitudeDelta: degreePerKM * km + extraMargin,
  };
}

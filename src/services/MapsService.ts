import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_GEOCODING_URL,
} from '../constants/env';

async function getLocationAddress(lat: number, long: number): Promise<string> {
  try {
    const url = `${GOOGLE_MAPS_GEOCODING_URL}?latlng=${lat},${long}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);

    if (response.status >= 400)
      throw new Error(`error status: ${response.status}`);

    const data = await response.json();

    const address = data.results[0]['address_components'];

    const curatedAddress = `${address[2]['long_name']} ${address[1]['short_name']}, ${address[3]['short_name']}, ${address[5]['short_name']}`;

    return curatedAddress;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export const MapsService = {
  getLocationAddress,
};

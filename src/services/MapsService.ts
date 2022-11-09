import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_GEOCODING_URL,
  GOOGLE_MAPS_PLACES_URL,
} from '../constants/env';
import { Candidate, PlacesResponse } from '../interfaces/interfaces';

async function getLocationAddress(lat: number, long: number): Promise<string> {
  try {
    const url = `${GOOGLE_MAPS_GEOCODING_URL}?latlng=${lat},${long}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);

    if (response.status >= 400)
      throw new Error(`error status: ${response.status}`);

    const data = await response.json();

    const address = data.results[0]['address_components'];

    const curatedAddress = `${address[1]['short_name']} ${address[0]['short_name']}, ${address[3]['short_name']}, ${address[5]['short_name']}`;

    return curatedAddress;
  } catch (error) {
    console.log(error);

    return [];
  }
}
//?input=rivadavia%2049&inputtype=textquery&fields=formatted_address,name&key=AIzaSyCPeX7MewEz5rkWPAHN2zzM-u5LKHxGNrA&locationbias=circle:10000@-34.6220733,-58.4255677
const PLACES_DEFAULT_PARAMS =
  'inputtype=textquery&fields=formatted_address,name,geometry&locationbias=ipbias';
async function getAddresses(query: string): Promise<Candidate[]> {
  try {
    const url = `${GOOGLE_MAPS_PLACES_URL}?input=${query}&${PLACES_DEFAULT_PARAMS}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);

    if (response.status >= 400)
      throw new Error(`error status: ${response.status}`);

    const data: PlacesResponse = await response.json();
    console.log(data);
    
    return data.candidates;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export const MapsService = {
  getLocationAddress,
  getAddresses,
};

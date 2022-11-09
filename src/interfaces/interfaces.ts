export interface GenericModel {
  id: string;
}
export interface Favorite extends GenericModel {
  mealName: string;
  chainName: string;
  rating: number;
  timeAproxMin: number;
  timeAproxMax: number;
  mealImageSource: string;
  logoImageSource: string;
}

export interface Category extends GenericModel {
  name: string;
  imageSource: string;
}

export interface Resto extends GenericModel {
  name: string;
  rating?: number;
  timeAproxMin?: number;
  timeAproxMax?: number;
  logoImageSource: string;
  discount?: number;
  location: string;
  detail?: string;
}

export interface Candidate {
  formatted_address: string;
  geometry: Geometry;
  name: string;
}

export interface PlacesResponse {
  status: string;
  candidates: Candidate[];
}

export interface Location {
  lat: number;
  lng: number;
}

export interface LocationLong {
  latitude: number;
  longitude: number;
}

export interface Geometry {
  location: Location;
  viewport: {
    norteast: Location;
    southwest: Location;
  };
}

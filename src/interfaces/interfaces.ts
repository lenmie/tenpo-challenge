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

export interface Geometry {
  location: Location;
  viewport: {
    norteast: Location;
    southwest: Location;
  };
}

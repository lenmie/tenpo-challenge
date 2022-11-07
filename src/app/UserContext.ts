import { createContext } from 'react';

export interface UserData {
  location: {
    coords: {
      lat: number;
      long: number;
    };
    streetName: string;
  };
}

export const UserContext = createContext(null);

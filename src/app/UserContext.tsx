import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { Location } from '../interfaces/interfaces';

export interface Store {
  area: (number | Dispatch<SetStateAction<number>>)[];
  address: (string | Dispatch<SetStateAction<string>>)[];
  location: (Location | Dispatch<SetStateAction<string>>)[];
}

export const StoreContext = createContext<Store | null>(null);

export default function StoreProvider(props) {
  const [areaKm, setAreaKm] = useState(1);
  const [addressName, setAddressName] = useState('');
  const [currentLocation, setCurrent] = useState(null);

  const store = {
    area: [areaKm, setAreaKm],
    address: [addressName, setAddressName],
    location: [currentLocation, setCurrent],
  };

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

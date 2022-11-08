import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

export interface Store {
  area: (number | Dispatch<SetStateAction<number>>)[];
  address: (string | Dispatch<SetStateAction<string>>)[];
}

export const StoreContext = createContext<Store | null>(null);

export default function StoreProvider(props) {
  const [areaKm, setAreaKm] = useState(1);
  const [addressName, setAddressName] = useState('');

  const store = {
    area: [areaKm, setAreaKm],
    address: [addressName, setAddressName],
  };

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

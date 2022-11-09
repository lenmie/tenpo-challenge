import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import storeReducer, { initialStore } from './storeReducer';

export const StoreContext = createContext();

const StoreProvider = props => {
  const [state, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)[0];
export const useDispatch = () => useContext(StoreContext)[1];

export default StoreProvider;

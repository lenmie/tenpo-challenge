import { Location } from '../../interfaces/interfaces';

export const types = {
  setAddress: 'SET_ADDRESS',
  setLocation: 'SET_LOCATION',
  setArea: 'SET_AREA',
  setExtraAddress: 'SET_EXTRA_ADDRESS',
  enableSearchByPosition: 'ENABLE_SEARCH_BY_POSITION',
  disableSearchByPosition: 'DISABLE_SEARCH_BY_POSITION',
};

export const initialStore: Store = {
  area: 1,
  address: '',
  extraAddress: '',
  location: null,
  searchByPosition: true,
};

export interface Store {
  area: number;
  address: string;
  extraAddress: string;
  location: Location | null;
  searchByPosition: boolean;
}
const storeReducer = (state: Store, action: { type: any; payload: any }) => {
  switch (action.type) {
    case types.setAddress:
      return {
        ...state,
        address: action.payload,
      };
    case types.setArea:
      return {
        ...state,
        area: action.payload,
      };
    case types.setLocation:
      return {
        ...state,
        location: action.payload,
      };
    case types.setExtraAddress:
      return {
        ...state,
        extraAddress: action.payload,
      };
    case types.enableSearchByPosition:
      return {
        ...state,
        searchByPosition: true,
      };
    case types.disableSearchByPosition:
      return {
        ...state,
        searchByPosition: false,
      };
    default:
      return state;
  }
};

export default storeReducer;

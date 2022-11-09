import { API_URL } from '../constants/env';
import { Favorite } from '../interfaces/interfaces';

const getFavorites = async (): Promise<Favorite[]> =>
  await fetch(`${API_URL}/favorite`).then(async response => {
    const result = await response.json();

    return result;
  });

export const FavoriteService = {
  getFavorites,
};

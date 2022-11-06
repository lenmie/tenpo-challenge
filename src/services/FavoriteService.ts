import { API_URL } from '../constants/env';

const getFavorites = async (): Promise<any[]> =>
  await fetch(`${API_URL}/favorite`).then(async response => {
    const result = await response.json();

    return result;
  });

export const FavoriteService = {
  getFavorites,
};

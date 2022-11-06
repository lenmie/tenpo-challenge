import { API_URL } from '../constants/env';

const getRestos = async (): Promise<any[]> =>
  await fetch(`${API_URL}/resto`).then(async response => {
    const result = await response.json();

    return result;
  });

export const RestoService = {
  getRestos,
};

import { API_URL } from '../constants/env';

const ERROR_MESSAGE = 'Hubo un error al intentar buscar restaurantes';

const getRestos = async (): Promise<any[]> =>
  await fetch(`${API_URL}/resto`).then(async response => {
    const result = await response.json();

    return result;
  });

async function searchResto(query: string, area = 1): Promise<any[] | string> {
  try {

    const response = await fetch(
      `${API_URL}/search?query=${query}&area=${area}`,
    );
    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return ERROR_MESSAGE;
  }
}

export const RestoService = {
  getRestos,
  searchResto,
};

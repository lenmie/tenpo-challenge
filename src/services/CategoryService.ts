import { API_URL } from '../constants/env';

const getCategories = async (): Promise<any[]> =>
  await fetch(`${API_URL}/category`).then(async response => {
    const result = await response.json();

    return result;
  });

export const CategoryService = {
  getCategories,
};

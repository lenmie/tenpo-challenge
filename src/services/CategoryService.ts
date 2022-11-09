import { API_URL } from '../constants/env';
import { Category } from '../interfaces/interfaces';

const getCategories = async (): Promise<Category[]> =>
  await fetch(`${API_URL}/category`).then(async response => {
    const result = await response.json();

    return result;
  });

export const CategoryService = {
  getCategories,
};

import globals from '../constants/globals';
import Category from '../model/Category';

const cates: Category[] = [
  {
    id: '1C',
    name: 'HAMBURGUESAS',
    imageSource: globals.images.cagetory.hamburger,
  },
  {
    id: '2C',
    name: 'ITALIANA',
    imageSource: globals.images.cagetory.italian,
  },
  {
    id: '3C',
    name: 'PIZZAS',
    imageSource: globals.images.cagetory.pizza,
  },
];

class CategoryService {
  async getCategories(): Promise<Category[]> {
    return new Promise(resolve => {
      resolve(cates.map(cat => new Category(cat)));
    });
  }
}

export default new CategoryService();

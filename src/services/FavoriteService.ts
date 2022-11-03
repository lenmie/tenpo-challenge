import globals from '../constants/globals';
import Favorite from '../model/Favorite';

const favs: Favorite[] = [
  {
    id: '1F',
    mealName: 'Combo Hamburguesa Big Mac',
    chainName: 'McDonalds',
    rating: 3.5,
    timeAproxMin: 10,
    timeAproxMax: 50,
    mealImageSource: globals.images.favorites.hamburger,
    logoImageSource: globals.images.chainLogo.mcdonalds,
  },
  {
    id: '2F',
    mealName: 'Pizza Mediana',
    chainName: 'MELT pizzas',
    rating: 3.5,
    timeAproxMin: 10,
    timeAproxMax: 60,
    logoImageSource: globals.images.chainLogo.melt,
    mealImageSource: globals.images.favorites.pizza,
  },
];

class FavoriteService {
  async getFavorites(): Promise<Favorite[]> {
    return new Promise(resolve => {
      resolve(favs.map(cat => new Favorite(cat)));
    });
  }
}

export default new FavoriteService();

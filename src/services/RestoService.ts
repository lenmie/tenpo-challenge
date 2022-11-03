import globals from '../constants/globals';
import Resto from '../model/Resto';

const restos: Resto[] = [
  {
    id: '1R',
    name: 'McDonalds',
    rating: 3.5,
    timeAproxMin: 10,
    timeAproxMax: 50,
    discount: 50,
    logoImageSource: globals.images.chainLogo.mcdonalds,
  },
  {
    id: '2R',
    name: 'MELT pizzas',
    rating: 4.5,
    timeAproxMin: 10,
    timeAproxMax: 60,
    discount: 30,
    logoImageSource: globals.images.chainLogo.melt,
  },
  {
    id: '3R',
    name: 'YOKONO',
    rating: 3.5,
    timeAproxMin: 10,
    timeAproxMax: 50,
    discount: 50,
    logoImageSource: globals.images.chainLogo.yokono,
  },
  {
    id: '4R',
    name: "Papa John's",
    rating: 4.1,
    timeAproxMin: 10,
    timeAproxMax: 60,
    discount: 0,
    logoImageSource: globals.images.chainLogo.papajohns,
  },
];

class RestoService {
  async getRestos(): Promise<Resto[]> {
    return new Promise(resolve => {
      resolve(restos.map(cat => new Resto(cat)));
    });
  }
}

export default new RestoService();

import React, { useEffect, useState } from 'react';
import CategoryService from '../../../services/CategoryService';
import FavoriteService from '../../../services/FavoriteService';
import RestoService from '../../../services/RestoService';
import { Container } from '../../components/Container.styled';
import Carousel from './Carousel';
import CategoryCarouselItem from './CategoryCarouselItem';
import FavoriteCarouselItem from './FavoriteCarouselItem';
import RestoCarouselItem from './RestoCarouselItem';

const carousels = {
  resto: 'RESTAURANTES',
  category: 'CATEGORIAS',
  favorites: 'TUS FAVORITOS',
};

export default function HomeContentContainer() {
  const [categories, setCategories] = useState([]);
  const [restos, setRestos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    CategoryService.getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    RestoService.getRestos().then(setRestos);
  }, []);

  useEffect(() => {
    FavoriteService.getFavorites().then(setFavorites);
  }, []);

  return (
    <Container bg="white" flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} mb={25}>
        <Carousel
          title={carousels.resto}
          content={restos}
          ItemComponent={RestoCarouselItem}
        />
      </Container>
      <Container flex={1} mb={25}>
        <Carousel
          title={carousels.category}
          content={categories}
          ItemComponent={CategoryCarouselItem}
        />
      </Container>
      <Container flex={1} mb={25}>
        <Carousel
          title={carousels.favorites}
          content={favorites}
          ItemComponent={FavoriteCarouselItem}
        />
      </Container>
    </Container>
  );
}
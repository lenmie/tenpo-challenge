import { Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

console.log(WINDOW_WIDTH);
console.log(WINDOW_HEIGHT);

const favoriteItemContainerWidth = 250;
const favoriteItemContainerHeight = 175;
const restoItemContainerWidth = WINDOW_WIDTH * 0.28;
const restoItemContainerHeight = WINDOW_HEIGHT * 0.2;

const dimensions = {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  favoriteItemContainerWidth,
  favoriteItemContainerHeight,
  restoItemContainerWidth,
  restoItemContainerHeight,
};
export default dimensions;

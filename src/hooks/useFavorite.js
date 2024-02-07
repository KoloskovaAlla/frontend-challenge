
import { useSelector } from 'react-redux';
import { setIsFavorite } from '../store/favoriteSlice';

const getState = (store) => store.favoriteReducer;

export const useFavorite = () => {
  const { isFavorite } = useSelector(getState);
  
  return {
    isFavorite,
    setIsFavorite,
  };
};

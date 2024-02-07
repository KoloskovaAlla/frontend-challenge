import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteCatsReducer } from './favoriteCatsSlice';
import { catsPageReducer } from './catsPageSlice';
import { currentPageReducer } from './currentPageSlice';
import { favoriteReducer } from './favoriteSlice';

const rootReducer = combineReducers({
  favoriteCatsReducer,
  catsPageReducer,
  currentPageReducer,
  favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
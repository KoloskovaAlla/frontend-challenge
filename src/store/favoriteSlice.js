import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFavorite: false,
};

export const  favoriteSlice = createSlice({
  name: 'isFavorite',
  initialState,
  reducers: {
    setIsFavorite: (state, { payload }) => {
      state.isFavorite = payload;
    },
  },
});

export const { reducer: favoriteReducer } =  favoriteSlice;
export const { setIsFavorite } = favoriteSlice.actions;

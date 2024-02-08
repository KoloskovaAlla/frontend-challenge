import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCats: localStorage.getItem('favoriteCats') ? JSON.parse(localStorage.getItem('favoriteCats')) : []
};

export const favoriteCatsSlice = createSlice({
  name: 'favoriteCats',
  initialState,
  reducers: {
    setFavoriteCats: (state, { payload }) => {
      state.favoriteCats = payload;
    },
  },
});

export const { reducer: favoriteCatsReducer } = favoriteCatsSlice;
export const { setFavoriteCats } = favoriteCatsSlice.actions;

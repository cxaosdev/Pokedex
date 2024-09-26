import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice, favoriteSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer
  },
});

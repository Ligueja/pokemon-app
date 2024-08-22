import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../../configs/interfaces/pokemon.interface";

interface FavoritesState {
  favorites: Pokemon[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Pokemon>) => {
      // Verifica se o Pokémon já está na lista de favoritos
      const isAlreadyFavorite = state.favorites.some(
        (pokemon) => pokemon.id === action.payload.id
      );
      // Se não existir insere na lista
      if (!isAlreadyFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;

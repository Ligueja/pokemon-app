import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemons/pokemonsSlice";
import { favoriteReducer } from "./favorites/favoritesSlice";

export const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  favorite: favoriteReducer,
});

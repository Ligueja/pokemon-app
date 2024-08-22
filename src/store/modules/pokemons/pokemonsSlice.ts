import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllPokemonsServices,
  getPokemonDetailsService,
} from "../../../configs/services/pokemons-api/pokemons.service";
import { Pokemon } from "../../../configs/interfaces/pokemon.interface";
import { ResponseAPI } from "../../../configs/services/pokemons-api/response-api.interface";

interface PokemonsState {
  pokemons: Pokemon[];
  pagination: {
    limit: number;
    count: number;
    totalPages: number;
  };
  selectedPokemon: Pokemon | null;
  error: string | null;
}

const initialState: PokemonsState = {
  pokemons: [],
  pagination: {
    limit: 20,
    count: 0,
    totalPages: 0,
  },
  selectedPokemon: null,
  error: null,
};

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async (page: number) => {
    const response: ResponseAPI<Pokemon[]> = await getAllPokemonsServices(
      page,
      20
    );
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.message);
    }
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  "pokemons/fetchPokemonDetails",
  async (id: number) => {
    const response = await getPokemonDetailsService(id);
    if (response.ok) {
      return response.data;
    } else {
      throw new Error(response.message);
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
        state.error = null;
      })
      .addCase(
        fetchPokemonDetails.fulfilled,
        (state, action: PayloadAction<Pokemon | undefined>) => {
          if (action.payload) {
            state.selectedPokemon = action.payload;
          } else {
            state.selectedPokemon = null;
          }
          state.error = null;
        }
      );
  },
});

export const pokemonReducer = pokemonsSlice.reducer;

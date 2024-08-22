import axios from "axios";

export const pokemonsApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

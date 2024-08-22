import axios from "axios";
import { pokemonsApi } from "./cliente-http";
import { ErrorResponse, ResponseAPI } from "./response-api.interface";
import {
  Pokemon,
  PokemonAbility,
  PokemonStat,
} from "../../interfaces/pokemon.interface";

export async function getAllPokemonsServices(
  page: number,
  limit: number
): Promise<ResponseAPI<Pokemon[]>> {
  try {
    const response = await pokemonsApi.get("/pokemon", {
      params: {
        offset: (page - 1) * limit,
        limit: limit,
      },
    });

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon: { url: string }) => {
        const resultDetail = await axios.get(pokemon.url);

        return {
          id: resultDetail.data.id,
          name: resultDetail.data.name,
          size: resultDetail.data.height,
          image:
            resultDetail.data.sprites.other["official-artwork"].front_default,
          isFavorite: false,
        } as Pokemon;
      })
    );

    const totalPages = Math.ceil(response.data.count / limit);

    return {
      ok: true,
      message: "Listado com sucesso",
      pagination: {
        limit: limit,
        count: response.data.count,
        totalPages: totalPages,
      },
      data: pokemons,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorResponse: ErrorResponse = {
        status: err.response?.status || 500,
        message: err.response?.data.message || "API indisponível!",
        details: err.response?.data.details,
      };

      return {
        ok: false,
        message: "API indisponível!",
        errors: errorResponse,
      };
    }
    return {
      ok: false,
      message: "Aconteceu um erro inesperado!",
    };
  }
}

export async function getPokemonDetailsService(
  id: number
): Promise<ResponseAPI<Pokemon>> {
  try {
    const response = await pokemonsApi.get(`/pokemon/${id}`);
    const data = response.data;

    // Mapeia as habilidades do Pokémon
    const abilities: PokemonAbility[] = data.abilities.map(
      (ability: { ability: { name: string } }) => ({
        abilityName: ability.ability.name,
      })
    );

    // Mapeia as estatísticas do Pokémon
    const stats: PokemonStat[] = data.stats.map(
      (stat: { base_stat: number; stat: { name: string } }) => ({
        base_stat: stat.base_stat,
        statName: stat.stat.name,
      })
    );

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      size: data.height,
      image: data.sprites.other["official-artwork"].front_default,
      isFavorite: false,
      abilities: abilities,
      stats: stats,
    };

    return {
      ok: true,
      message: "Detalhes obtidos com sucesso",
      data: pokemon,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorResponse: ErrorResponse = {
        status: err.response?.status || 500,
        message: err.response?.data.message || "API indisponível!",
      };

      return {
        ok: false,
        message: "API indisponível!",
        errors: errorResponse,
      };
    }
    return {
      ok: false,
      message: "Aconteceu um erro inesperado!",
    };
  }
}

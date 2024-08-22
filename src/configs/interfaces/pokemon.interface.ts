export interface PokemonAbility {
  abilityName: string;
}

export interface PokemonStat {
  base_stat: number;
  statName: string;
}

export interface Pokemon {
  id: number;
  name: string;
  size: number;
  image: string;
  isFavorite: boolean;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

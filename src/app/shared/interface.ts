export interface PokemonList {
  name: string;
  url: string;
  id?: number;
}

export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonList[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface AbilityEffects {
  effect_entries: [];
}
export interface EffectEntries {
  effect: string;
  short_effect: string;
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
}

export interface MovesInfo {
  effect_entries: [];
}

export interface MovesInfoText {
  effect: string;
}

export interface PokemonDetails {
  abilities?: Ability[];
  forms?: [];
  game_indices?: [];
  id?: number;
  height: number;
  held_items?: [];
  is_default?: boolean;
  location_area_encounters?: [];
  moves?: Moves[];
  name: string;
  order?: number;
  species?: {};
  sprites?: {};
  stats?: [];
  types?: [];
  weight: number;
}

export interface PokemonDetailsImg {
  other: {
    home: {
      front_shiny: string;
    };
  };
}

export interface PokemonAbilities {
  infoPokemon: PokemonDetails;
  abilities: Ability[];
  moves: Moves[];
  sprites: PokemonDetailsImg;
}

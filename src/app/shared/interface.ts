export interface PokemonList {
  name: string;
  // rotation_period: string;
  // orbital_period: string;
  // diameter: string;
  // climate: string;
  // gravity: string;
  // terrain: string;
  // surface_water: string;
  // population: string;
  // residents: string[];
  // films: string[];
  // created: string;
  // edited: string;
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
  
  abilities?: Ability [];
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
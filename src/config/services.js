import { PokemonsFactory } from '../services/pokemons';
import { PokemonFactory } from '../services/pokemon';

import Axios from 'axios';
import { env } from '../../env'

export const http = Axios.create({
    baseURL: env.API_URL,
    timeout: 50000
});

export const pokemons = PokemonsFactory(http);
export const pokemon = PokemonFactory(http);

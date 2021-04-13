//Actions
export const PokemonActionTypes = {
  GET_POKEMON_REQUEST: 'GET_POKEMON_REQUEST',
  GET_POKEMON_FAIL: 'GET_POKEMON_FAIL',
  GET_POKEMON_SUCCESS: 'GET_POKEMON_SUCCESS',
};


export function getPokemonRequest() {
    return {
        type: PokemonActionTypes.GET_POKEMON_REQUEST,
    }
}

export function getPokemonFail(error) {
    return {
        type: PokemonActionTypes.GET_POKEMON_FAIL,
        error
    }
}

export function getPokemonSuccess(pokemon) {
    return {
        type: PokemonActionTypes.GET_POKEMON_SUCCESS,
        pokemon
    }
}

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: null,
};

const reducers = {
    [PokemonActionTypes.GET_POKEMON_REQUEST]: (state, action) => ({
        ...state,
        loading: true,
        error: null,
    }),
    [PokemonActionTypes.GET_POKEMON_FAIL]: (state, action) => ({
        ...state,
        loading: null,
        error: action.error,
    }),
    [PokemonActionTypes.GET_POKEMON_SUCCESS]: (state, action) => ({
        loading: null,
        error: null,
        data: action,
    }),
};

export default function get_pokemon(state = INITIAL_STATE, action){

    if (action.type in reducers){
        return reducers[action.type](state, action)
    }

    return state
}

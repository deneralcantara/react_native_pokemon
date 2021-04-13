//Actions
export const PokemonsActionTypes = {
  LIST_POKEMONS_REQUEST: 'LIST_POKEMONS_REQUEST',
  LIST_POKEMONS_FAIL: 'LIST_POKEMONS_FAIL',
  LIST_POKEMONS_SUCCESS: 'LIST_POKEMONS_SUCCESS',
};

export function listPokemonsRequest() {
    return {
        type: PokemonsActionTypes.LIST_POKEMONS_REQUEST,
    }
}

export function listPokemonsFail(error) {
    return {
        type: PokemonsActionTypes.LIST_POKEMONS_FAIL,
        error
    }
}

export function listPokemonsSuccess(pokemons) {
    return {
        type: PokemonsActionTypes.LIST_POKEMONS_SUCCESS,
        pokemons
    }
}

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: null,
};

const reducers = {
    [PokemonsActionTypes.LIST_POKEMONS_REQUEST]: (state, action) => ({
        ...state,
        loading: true,
        error: null,
    }),
    [PokemonsActionTypes.LIST_POKEMONS_FAIL]: (state, action) => ({
        ...state,
        loading: null,
        error: action.error,
    }),
    [PokemonsActionTypes.LIST_POKEMONS_SUCCESS]: (state, action) => ({
        loading: null,
        error: null,
        data: action,
    }),
};

export default function list_pokemons(state = INITIAL_STATE, action){

    if (action.type in reducers){
        return reducers[action.type](state, action)
    }

    return state
}

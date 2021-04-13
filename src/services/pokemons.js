export function getPokemons(http) {
    return function (url) {
        return http.get(
            url ? url : `/pokemon/`,
            {

            }
        )
    }
}

export const PokemonsFactory = function(http) {
    return {
        getPokemons: getPokemons(http),
    }
};

export function getPokemon(http) {
    return function (url) {
        return http.get(
            url,
            {

            }
        )
    }
}

export const PokemonFactory = function(http) {
    return {
        getPokemon: getPokemon(http),
    }
};

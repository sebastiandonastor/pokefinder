import { PokemonService } from "../services/pokemon.service"

export const pokemonResolver = async (to, from, next) => {
    try {
        const pokeService = new PokemonService();
        to.meta['pokemons'] = await pokeService.getAllPokemons();
    
    }
    catch(e) {
        to.meta['pokemons'] = [];
    } finally {
        next();

    }
}
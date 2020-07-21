import pokeArray from '/data/pokemon.js';


export function getRandomPokemon(pokeArray) {
    const randomPokemon = Math.floor(Math.random() * pokeArray.length);
    return pokeArray[randomPokemon]; 
    
}
// import functions and grab DOM elements
import { getRandomPokemon } from '/poke-utils.js';
import pokeArray from '/data/pokemon.js';
const pokeDisplay = document.querySelectorAll('label');
const pokeRadio = document.querySelectorAll('input');
const selectButton = document.getElementById('select');





const secondPoke = pokeDisplay[1];
const thirdPoke = pokeDisplay[2];

// initialize state
//let pokemonEncountered = 0;
//let timesCaptured = 0;
//let pokemonCaptured = [];
//let notCaptured = [];
// set event listeners to update state and DOM
selectButton.addEventListener('click', () => {
    const randoPick = getRandomPokemon(pokeArray);
    const firstPoke = pokeDisplay[0];
    const input1 = firstPoke.children[1];
    const img1 = firstPoke.children[2];
    console.log(randoPick);
    //input1.textcontent = 
    img1.src = randoPick.url_image;
});

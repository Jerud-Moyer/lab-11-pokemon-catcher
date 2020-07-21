// import functions and grab DOM elements
import { getRandomPokemon, findById } from '/poke-utils.js';
import pokeArray from '/data/pokemon.js';

const pokeDisplay = document.querySelectorAll('label');
const pokeRadio = document.querySelectorAll('input');
const statBar = document.getElementById('message-span');


const firstPoke = pokeDisplay[0];
const input1 = firstPoke.children[0];
const secondPoke = pokeDisplay[1];
const input2 = secondPoke.children[0];
const thirdPoke = pokeDisplay[2];
const input3 = thirdPoke.children[0];







 //initialize state
let pokemonEncountered = [];
let cardsChosen = 0;
//let captures = 0;
//let pokemonCaptured = [];
//let notCaptured = [];
 //set event listeners to update state and DOM



function setPage() {
    
    let randoPick = getRandomPokemon(pokeArray);
    let randoPick2 = getRandomPokemon(pokeArray);
    let randoPick3 = getRandomPokemon(pokeArray);
    

    while (randoPick.id === randoPick2.id || randoPick.id === randoPick3.id || randoPick2.id === randoPick3.id) {
        randoPick2 = getRandomPokemon(pokeArray);
        randoPick3 = getRandomPokemon(pokeArray);
    }
    
    const img1 = firstPoke.children[1];
    img1.src = randoPick.url_image;
    firstPoke.children[2].textContent = randoPick.pokemon;
    input1.value = randoPick.id;

    const img2 = secondPoke.children[1];
    img2.src = randoPick2.url_image;
    secondPoke.children[2].textContent = randoPick2.pokemon;
    input2.value = randoPick2.id;

    const img3 = thirdPoke.children[1];
    img3.src = randoPick3.url_image;
    thirdPoke.children[2].textContent = randoPick3.pokemon;
    input3.value = randoPick3.id;

    encounteredPokemon(randoPick);
    encounteredPokemon(randoPick2);
    encounteredPokemon(randoPick3);
    console.log(pokemonEncountered);

    statBar.textContent = 

    

}






//this function will update pokemonEncountered array with the randopicks
function encounteredPokemon(randoObject) {
    let encountered = findById(pokemonEncountered, randoObject.id);
    if (encountered) {
        encountered.encounters ++;

    } else {
        const newEncounter = {
            id: randoObject.id,
            encounters: 1,
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
        

    }

}
setPage();

pokeRadio[0].addEventListener('click', (e) => {
    console.log(e.target.value);
    
    let captured = findById(pokemonEncountered, e.target.value);
    captured.caught ++;
    cardsChosen + 1;
    setPage();
    

});


pokeRadio[1].addEventListener('click', (e) => {
    let captured = findById(pokemonEncountered, e.target.value);
    captured.caught ++;
    cardsChosen + 1;
    setPage();
    

});


pokeRadio[2].addEventListener('click', (e) => {
    let captured = findById(e.target.value, pokemonEncountered);
    captured.caught ++;
    cardsChosen + 1;
    setPage();
    

}); 

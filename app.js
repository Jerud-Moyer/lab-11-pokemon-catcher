// import functions and grab DOM elements
import { getRandomPokemon, findById, pushPoke } from '/poke-utils.js';
import pokeArray from '/data/pokemon.js';


const pokeDisplay = document.querySelectorAll('label');
const pokeRadio = document.querySelectorAll('input');
const statBar = document.getElementById('message-span');
const statBar2 = document.getElementById('message-span-b');
const resultButton = document.getElementById('select');
const pokeWindow = document.getElementById('poke-window');


const firstPoke = pokeDisplay[0];
const input1 = firstPoke.children[0];
const secondPoke = pokeDisplay[1];
const input2 = secondPoke.children[0];
const thirdPoke = pokeDisplay[2];
const input3 = thirdPoke.children[0];







 //initialize state
let pokemonEncountered = [];
let cardsChosen = 0;

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
    

    statBar.textContent = `You have caught ${cardsChosen} Pokeymen!`;

    if (cardsChosen === 10) {
        statBar.textContent = `great job, you have caught 10 POKEYMEN!`;
        statBar2.textContent = `Now you gotta check 'em all!`;
        resultButton.style.visibility = 'visible';
        pokeWindow.style.visibility = 'hidden';
        
    }

    

}






//this function will update pokemonEncountered array with the randopicks
function encounteredPokemon(randoObject) {
    let encountered = findById(pokemonEncountered, randoObject.id);
    if (encountered) {
        encountered.encounters ++;

    } else {
        const newEncounter = {
            id: randoObject.id,
            name: randoObject.pokemon,
            encounters: 1,
            caught: 0,
            
        };
        pokemonEncountered.push(newEncounter);
        

    }

}
setPage();


pokeRadio[0].addEventListener('click', (e) => {
    let captured = findById(pokemonEncountered, e.target.value);
    captured.caught ++;
    cardsChosen ++;
    setPage();
    

});


pokeRadio[1].addEventListener('click', (e) => {
    let captured = findById(pokemonEncountered, e.target.value);
    captured.caught ++;
    cardsChosen ++;
    setPage();
    

});


pokeRadio[2].addEventListener('click', (e) => {
    let captured = findById(pokemonEncountered, e.target.value);
    captured.caught ++;
    cardsChosen ++;
    setPage();
    

}); 

resultButton.addEventListener('click', () => {
    pushPoke(pokemonEncountered);
    window.location.href = ('./result-page/result.html');

});

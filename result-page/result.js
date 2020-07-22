import { getPoke } from '../poke-utils.js';

const deckPics = document.querySelector('header');

const pokeId1 = deckPics.children[1];
const pokeId2 = deckPics.children[2];
const pokeId3 = deckPics.children[3];
const pokeId4 = deckPics.children[4];
const pokeId5 = deckPics.children[5];
const pokeId6 = deckPics.children[6];
const pokeId7 = deckPics.children[7];
const pokeId8 = deckPics.children[8];
const pokeId9 = deckPics.children[9];
const pokeId10 = deckPics.children[10];
const pokeArray = getPoke();


pokeId1.textContent = pokeArray[0].name + '! times encountered - ' + pokeArray[0].encounters + ' times captured - ' + pokeArray[0].caught;
pokeId2.textContent = pokeArray[1].name + '! times encountered - ' + pokeArray[1].encounters + ' times captured - ' + pokeArray[1].caught;
pokeId3.textContent = pokeArray[2].name + '! times encountered - ' + pokeArray[2].encounters + ' times captured - ' + pokeArray[2].caught;
pokeId4.textContent = pokeArray[3].name + '! times encountered - ' + pokeArray[3].encounters + ' times captured - ' + pokeArray[3].caught;
pokeId5.textContent = pokeArray[4].name + '! times encountered - ' + pokeArray[4].encounters + ' times captured - ' + pokeArray[4].caught;
pokeId6.textContent = pokeArray[5].name + '! times encountered - ' + pokeArray[5].encounters + ' times captured - ' + pokeArray[5].caught;
pokeId7.textContent = pokeArray[6].name + '! times encountered - ' + pokeArray[6].encounters + ' times captured - ' + pokeArray[6].caught;
pokeId8.textContent = pokeArray[7].name + '! times encountered - ' + pokeArray[7].encounters + ' times captured - ' + pokeArray[7].caught;
pokeId9.textContent = pokeArray[8].name + '! times encountered - ' + pokeArray[8].encounters + ' times captured - ' + pokeArray[8].caught;
pokeId10.textContent = pokeArray[9].name + '! times encountered - ' + pokeArray[9].encounters + ' times captured - ' + pokeArray[9].caught;




export function getRandomPokemon(pokeArray) {
    const randomPokemon = Math.floor(Math.random() * pokeArray.length);
    return pokeArray[randomPokemon]; 
    
}

export function findById(someArray, someId) {
    const someNumber = Number(someId);
    let item = null;
    for (let i = 0; i < someArray.length; i ++) {
        if (someArray[i].id === someNumber){
            item = someArray[i];
        }
    }
    return item;
}

export function pushPoke(array) {
    const stringItems = JSON.stringify(array);
    localStorage.setItem('result', stringItems);
}

export function getPoke() {
    const localCart = localStorage.getItem('result');
    const pokeArray = JSON.parse(localCart);

    return pokeArray;
}

 
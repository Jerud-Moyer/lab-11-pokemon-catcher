export function mungeNames(pokeArray) {
    const names = [];
    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];

        names.push(pokemon.name);
    }
    return names;
}

export function mungeCaptured(pokeArray) {
    const captures = [];
    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];
        captures.push(pokemon.caught);

    }
    return captures;
}

export function mungeEncountered(pokeArray) {
    const encounters = [];
    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];
        encounters.push(pokemon.encounters);

    }
    return encounters;
}
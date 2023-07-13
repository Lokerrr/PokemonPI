const { Pokemon } = require('../db');

const createPokemon = async (name, img, hp, attack, defense, speed, height, weight, types, created) => {
    const newPokemon = await Pokemon.create({ 
        name, 
        img, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight,
        created
    });
    newPokemon.addTypes(types);
    const objectPokemon = {
        newPokemon,
        types
    };
    return objectPokemon;
}
module.exports = createPokemon;
const { Pokemon } = require('../db');

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, types, created) => {
    const newPokemon = await Pokemon.create({ 
        name, 
        image, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        created
    });
    newPokemon.addTypes(types);
    return newPokemon;
}
module.exports = createPokemon;
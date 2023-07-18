const cleanArray = (pokemon) => {
    const img = pokemon.sprites.other.dream_world.front_default;
    let hp = "";
    let attack = "";
    let defense = "";
    let speed = "";
    const types = [];

    pokemon.types.map((objTypes) => {
        types.push(objTypes.type.name)
    });

    pokemon.stats.forEach((stats) => {
        if(stats.stat.name === "hp"){ hp = stats.base_stat };
        if(stats.stat.name === "attack"){ attack = stats.base_stat };
        if(stats.stat.name === "defense"){ defense = stats.base_stat };
        if(stats.stat.name === "speed"){ speed = stats.base_stat};
    });
    return({
        id: pokemon.id,
        name: pokemon.name,
        image: img,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: types,
        created: false,
    });
};

const cleanArrayDB = (dbPokemons) => {
    dbPokemons.map((pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.img,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        created: pokemon.created,
        types: pokemon.types.map((type) => type.name)
    }
}
)
}
module.exports = {
    cleanArray, cleanArrayDB
};
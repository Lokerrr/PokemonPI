const axios = require('axios');
require("dotenv").config();
const URL = process.env.URL;
const {Pokemon, Type} = require('../db');
const { Op } = require('sequelize');
const { cleanArray } = require('../helpers/helpers.js');

// Busca Pokemones por ID desde la bdd o de la API.
const getPokemonsById = async (id, source) => {
    const pokemon = source === "api" 
    ? (await axios.get(`${URL}/${id}`)).data 
    : await Pokemon.findByPk(id, {
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    })
    if(source === "api"){
        return cleanArray(pokemon)
    }
    return pokemon;
};

// Busca Pokemones desde la API por NAME, y los busca por letra incluída, e indepentientemente de mayúsculas o minúsculas.
const searchPokemonByName = async (name) => {
    const dbPokemons = await Pokemon.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});
    const apiPokemons = await getApiInfo();
    const allPokemons = [...dbPokemons, ...apiPokemons];
    if(name){
        let filterPokemons = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
        if(filterPokemons.length) return filterPokemons;
        throw new Error (`No se encontró el pokemon con el nombre: ${name}`);
    }else {
        return allPokemons;
    };
};

// Trae TODOS los Pokemones desde la API (solo con las props correspondientes).
const getApiInfo = async () => {
    const { results } = (await axios.get(`${URL}?limit=48`)).data
    const apiInfo = results.map (async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return {
            id: pokemonData.data.id,
            name: pokemonData.data.name,
            img: pokemonData.data.sprites.other.dream_world.front_default,
            hp: pokemonData.data.stats[0].base_stat,
            attack: pokemonData.data.stats[1].base_stat,
            defense: pokemonData.data.stats[2].base_stat,
            speed: pokemonData.data.stats[5].base_stat,
            height: pokemonData.data.height,
            weight: pokemonData.data.weight,
            types: pokemonData.data.types.map((type) => type.type.name),
            created: false,
        };
    });
    return Promise.all(apiInfo)
};

// "Instancia" los Pokemones, desde la bdd y desde la api (y los retorna como array de objetos).
const getAllPokemons = async () => {
    const dbPokemons = await Pokemon.findAll();
    const apiPokemons = await getApiInfo();
    return [...dbPokemons, ...apiPokemons];
};

module.exports = {
    getPokemonsById, 
    searchPokemonByName,
    getAllPokemons
};
const {searchPokemonByName, getAllPokemons, getPokemonsById} = require("../controllers/getPokemonsController")

const getAllOrByName = async (req, res) => {
    const { name } = req.query;
  
    const results = name ? await searchPokemonByName(name) : await getAllPokemons();
    res.status(200).json(results);
  }
  
  const pokemonsByIdHandler = async (req,res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
      const game = await getPokemonsById(id, source);
      res.status(200).json(game);
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  };
  
  
  
  
  module.exports = {getAllOrByName, pokemonsByIdHandler}
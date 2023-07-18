const createPokemon = require("../controllers/createPokemonController");

const newPokemonHandler = async (req, res) => {
    const { name, img, hp, attack, defense, speed, height, weight, types, created } = req.body;
    try {
      const newPokemon = await createPokemon(name, img, hp, attack, defense, speed, height, weight, types, created);
      res.status(200).json("newPokemon");
    } catch (error) {
      res.status(404).json({error: error.message});
    };
  };

  module.exports = { newPokemonHandler }
const router = require("express").Router();
const { getAllOrByName, pokemonsByIdHandler } = require("../handlers/getPokemonsHandlers");
const { newPokemonHandler } = require("../handlers/createPokemonHandler");

const validate = (req, res, next) => {
    const  {name, image, hp, attack, defense, speed} = req.body;
    if(!name || !image || !hp || !attack || !defense || !speed){
        res.status(400).json({error: "Missing data"});
    }
    next();
};

router.get("/", getAllOrByName)
router.get("/name?", getAllOrByName)
router.get("/:id", pokemonsByIdHandler)

router.post("/", validate, newPokemonHandler)


module.exports = router;
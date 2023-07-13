const router = require("express").Router();
const { getAllOrByName, pokemonsByIdHandler } = require("../handlers/getPokemonsHandlers");
const { newPokemonHandler } = require("../handlers/createPokemonHandler");

const validate = (req, res, next) => {
    const  {name, img, hp, attack, defense, speed, types} = req.body;
    if(!name || !img || !hp || !attack || !defense || !speed || !types){
        res.status(400).json({error: "Missing data"});
    }
    next();
};

router.get("/", getAllOrByName)
router.get("/name?", getAllOrByName)
router.get("/:id", pokemonsByIdHandler)

router.post("/", validate, newPokemonHandler)


module.exports = router;
const { Type } = require("../db");
const { getTypes } = require("../controllers/getTypesController");

const getTypeHandler = async (req, res) => {
    try {
        const db = await Type.findAll();
        if(!db.length){
            await getTypes();
        }
        const allTypes = await Type.findAll();
        res.status(201).json(allTypes);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

module.exports = { getTypeHandler };
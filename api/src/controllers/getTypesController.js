const { Type } = require("../db");
const axios = require('axios');
require("dotenv").config();
const URL = process.env.TYPES_URL;

const getTypes = async () => {
    try {
        const db = await Type.findAll();
        if(!db.length){
        const { results } = (await axios.get(URL)).data;
        const types = await results.map(({name}) => ({name}))
        Type.bulkCreate(types)
        }
        return db;
    } catch (error){
        console.log("Error obteniendo las types de las API:", error);
        throw error;
    }
};

module.exports = {getTypes};

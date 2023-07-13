const router = require("express").Router();
const { getTypeHandler } = require("../handlers/getTypesHandler")

router.get("/", getTypeHandler);

module.exports = router;
const express = require("express");
const salamsController = require("../controller/salams.js");

const router = express.Router();

router.get("/", salamsController.getDataSalams);

module.exports = router;

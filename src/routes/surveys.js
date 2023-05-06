const express = require("express");
const surveysController = require("../controller/surveys.js");

const router = express.Router();

router.get("/", surveysController.getDataSurvey);

module.exports = router;

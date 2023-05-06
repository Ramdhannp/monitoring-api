const express = require("express");
const studentsController = require("../controller/students.js");

const router = express.Router();

router.get("/", studentsController.getDataStudents);

module.exports = router;

const express = require("express");
const router = express.Router();
const immobileController = require("../controllers/immobileController")

router.get("/", immobileController.renderHome)

module.exports = router;
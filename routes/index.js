const express = require("express");
const router = express.Router();
const immobileController = require("../controllers/immobileController");
const loginController = require("../controllers/loginController");
const loginMiddleware = require("../middlewares/loginMiddleware")

router.get("/", immobileController.renderHome);
router.get("/login", loginController.renderLoginPage);
router.post("/login", loginMiddleware.fieldsValidation , loginMiddleware.validateUser, loginController.authenticateUser);

module.exports = router;
const router = require('express').Router();
const mainController = require("../controller/main.controller");

router.get("/user", mainController.getUser);

router.post("/user", mainController.createUser);


module.exports = { router };
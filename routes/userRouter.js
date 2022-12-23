const {registerUser, login} = require("../controllers/userController")

const express = require("express");

const router = express.Router();


router.route('/register').post(registerUser);

router.route('/login').post(login);

module.exports = router;
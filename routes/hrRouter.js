const express = require("express");
const { createStaff } = require('../controllers/hrControllers.js')

const router = express.Router();

router.post('/staff',createStaff);


module.exports = router;
const express = require("express");
const {
  Transaction,
  TransferList,
} = require("../controllers/transferController");

const router = express.Router();

router.post("/transfer", Transaction);

router.get("/transferList", TransferList);

module.exports = router;

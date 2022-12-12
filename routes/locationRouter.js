const express = require("express");
const {
  branchList,
  createBranch,
  createWarehouse,
  WarehouseList,
} = require("../controllers/locationController");
const router = express.Router();

router.post("/branch", createBranch);

router.get("/branches", branchList);

router.post("/wareHouse", createWarehouse);

router.get("/wareHouses", WarehouseList);

module.exports = router;

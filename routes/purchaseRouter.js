const express = require("express");
const { createPurchase, PurchaseList, purchaseDetail, createPurchaseReturn, purchaseReturnList, purchaseReturnDetail, createPurchaseGet } = require("../controllers/purchaseController");

const router = express.Router();

router.post("/purchase",createPurchase);

router.get("/purchase",createPurchaseGet);

router.get("/purchases",PurchaseList );

router.get("/purchases/:Id",purchaseDetail);

router.post("/purchaseReturn",createPurchaseReturn);

router.get("/purchasesReturn",purchaseReturnList);

router.post("/purchasesReturn/:Id",purchaseReturnDetail);


module.exports = router;
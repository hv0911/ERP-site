const express = require("express");
// const multer = require("multer");
// const upload = multer({ dest: "../uploads/" });

const {
  createContactPost,
  getCustomers,
  getSuppliers,
  supplier,
  customer,
  supplierUpdate,
  supplierDelete,
  customerUpdate,
  customerDelete,
} = require("../controllers/contactContollers");

const router = express.Router();

// router.get("/contact", createContactGet);

router.post("/contact", createContactPost);

//     <-- FOR SUPPLIERS -->

router.get("/suppliers", getSuppliers);

router.get("/suppliers/:supplierID", supplier); // Not implemented

router.put("/supplier/:supplierID", supplierUpdate); // Not implemented

router.delete("/supplier/:supplierID", supplierDelete); // Not implemented

//   <-- FOR CUSTOMERS -->

router.get("/customers", getCustomers);

router.get("/customers/:customerID", customer); //Not implemented

router.put("/cutomers/:customerID", customerUpdate); // Not implemented

router.delete("/customer/:customerID", customerDelete); //Not implemented

module.exports = router;

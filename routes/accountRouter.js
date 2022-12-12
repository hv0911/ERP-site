const express = require("express");
const {
  addExpense,
  expenceList,
  incomeList,
  addIncome,
  addNewAccount,
  accountList,
} = require("../controllers/accountController");

const router = express.Router();

router.post("/expence", addExpense);

router.get("/expences", expenceList);

router.post("/income", addIncome);

router.get("/incomes", incomeList);

router.post("/newAccount", addNewAccount);

router.get("/accounts", accountList);

module.exports = router;

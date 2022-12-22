const Expense = require("../models/AcccountModels/Expense");
const Income = require("../models/AcccountModels/Income");
const Account = require("../models/AcccountModels/Account");

exports.addExpense = (req, res) => {
  try {
    const { date, payment_form, narration, debit_details, total_amount } =
      req.body;

    const newExpense = new Expense({
      date: date,
      payment_form: payment_form,
      narration: narration,
      debit_details: debit_details,
      total_amount: total_amount,
    });

    newExpense.save();

    return res.status(201).json({
      success: true,
      expence: newExpense,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.expenceList = async (req, res) => {
  try {
    const expences = await Expense.find({});
    if (!expences) {
      return res.status(404).json({
        success: true,
        message: "no expenses",
      });
    }
    return res.status(201).json({
      success: true,
      expences: expences,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.addIncome = (req, res) => {
  try {
    const { date, narration, ac_head, amount, transaction_note } = req.body;
    const newIncome = new Income({
      date: date,
      narration: narration,
      ac_head: ac_head,
      amount: amount,
      transaction_note: transaction_note,
    });
    newIncome.save();

    return res.status(201).json({
      success: true,
      income: newIncome,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.incomeList = async (req, res) => {
  try {
    const incomes = await Income.find({});

    if (!incomes) {
      return res.status(404).json({
        success: false,
        message: "incomes not found",
      });
    }

    return res.status(201).json({
      success: true,
      incomes: incomes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.addNewAccount = (req, res) => {
  try {
    const {
      bank_name,
      branch_name,
      account_name,
      account_number,
      description,
      status,
    } = req.body;

    const newAccount = new Account({
      bank_name: bank_name,
      branch_name: branch_name,
      account_name,
      account_name,
      account_number: account_number,
      description: description,
    });
    newAccount.save();

    return res.status(201).json({
      success: true,
      newAccount: newAccount,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.accountList = async (req, res) => {
  try {
    const accountList = await Account.find({});

    if (!accountList) {
      return res.status(404).json({
        success: false,
        message: "no accounts exists",
      });
    }

    return res.status(201).json({
      success: true,
      accountList: accountList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};



const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenceSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  payment_form: {
    type: String,
    required: true,
  },
  narration: {
    type: String,
  },
  debit_details: [
    {
      payment_to: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      narration: {
        type: String,
      },
    },
  ],
  total_amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Expense", expenceSchema);

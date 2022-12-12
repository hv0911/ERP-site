const mongoose = require("mongoose");
const { Schema } = mongoose;

const incomeSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  narration: {
    type: String,
  },
  ac_head: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transaction_note: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Income", incomeSchema);

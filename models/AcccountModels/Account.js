const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountSchema = new Schema({
  bank_name: {
    type: String,
    required: true,
  },
  branch_name: {
    type: String,
    required: true,
  },
  account_name: {
    type: String,
  },
  account_number: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "DeActive"],
  },
});

module.exports = mongoose.model("Account", accountSchema);

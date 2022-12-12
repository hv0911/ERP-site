const mongoose = require("mongoose");
const { Schema } = mongoose;

const transferSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  payment_form: {
    type: String,
    required: true,
  },
  narration: String,
  payment_from_account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  payment_to: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Transfer", transferSchema);

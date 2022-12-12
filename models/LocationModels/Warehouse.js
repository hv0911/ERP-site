const mongoose = require("mongoose");
const { Schema } = mongoose;

const warehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  eamil: {
    type: String,
  },
  phone: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "DE-ACTIVE"],
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Warehouse", warehouseSchema);

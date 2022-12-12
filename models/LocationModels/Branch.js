const mongoose = require("mongoose");
const { Schema } = mongoose;

const bracnchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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

module.exports = mongoose.model("Branch", bracnchSchema);

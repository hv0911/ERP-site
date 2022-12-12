const mongoose = require("mongoose");
const { Schema } = mongoose;

const unitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "DeActive"],
  },
});

module.exports = mongoose.model("Unit", unitSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["Active", "DeActive"],
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);

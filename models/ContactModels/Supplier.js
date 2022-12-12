const mongoose = require("mongoose");
const { Schema } = mongoose;

const supplierSchema = new Schema({
  contacts: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
});

// supplierSchema.virtual("supplierID").get(function () {});

module.exports = mongoose.model("Supplier", supplierSchema);

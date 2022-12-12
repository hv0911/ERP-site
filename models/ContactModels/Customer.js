const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  contacts: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
});

// customerSchema.virtual("customerID").get(function () {
//   return;
// });

module.exports = mongoose.model("Customer", customerSchema);

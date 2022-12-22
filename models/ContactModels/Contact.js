const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  contact_type: {
    type: String, // <-- hold-->
    enum: ["Supplier", "Customer"],
    required: true,
  },

  // contactID: {
  //   type: String,
  //   unique: true,
  // },

  name: {
    type: String,
    required: true,
  },

  profile_picture: {
    public_id: String,
    url: String,
  },

  business_name: String,

  tax_number: String,

  // opening_balance: Number,

  // pay_term: String,

  // pay_term_condition: String,

  email: {
    type: String,
    required: true,
    unique: [true, "Email already Exist"],
  },

  mobile_no: Number,

  alt_mobile_no: Number,

  password: {
    type: String,
    required: true,
  },

  country: String,

  state: String,

  city: String,

  address: String,

  note: String,
});

module.exports = mongoose.model("Contact", contactSchema);

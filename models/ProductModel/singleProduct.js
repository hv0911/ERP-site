const mongoose = require("mongoose");
const { Schema } = mongoose;

const singleProductSchema = new Schema({
  product_type: "Single",
  product_name: {
    type: String,
    required: true,
  },
  product_sku: {
    type: String,
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
  },
  barcode_type: {
    type: String,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory",
  },
  model: {
    type: Schema.Types.ObjectId,
    ref: "Model",
  },
  alter_qauntity: {
    type: Number,
  },
  product_img: {
    type: String,
  },
  purchase_price: {
    type: Number,
  },
  selling_price: {
    type: Number,
    required: true,
  },
  min_selling_price: {
    type: Number,
  },
  price_of_other_currency: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  tax_type: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("SingleProduct", singleProductSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const comboSchema = new Schema({
    // product_type: { type:String , default:"Combo" },
    product_name: {
        type: String,
        required: true,
    },
    barcode_type: String,
    select_product: [{
        product: { type: Schema.Types.ObjectId, ref: "SingleProdcut" },
        quantity: { type: Number, default: 1 },
        price: Number,
        tax: Number,
    }
    ],
    purchase_price: Number,
    selling_price: Number,
    min_selling_price: Number,
    combo_selling_price: Number,
    description: String,


});

module.exports = mongoose.model("Combo", comboSchema);



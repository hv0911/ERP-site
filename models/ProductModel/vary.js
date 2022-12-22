const mongoose = require("mongoose");
const {Schema} = mongoose;

const variantSchema = new Schema({
    product_type:"Variant",
    product_name:{
        type:String,
        required:true
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
      tax:{
        type:Number
      },
      description:{
        type:String,
      },
      variant:[
        {
            variant_name:{
                types:Schema.Types.ObjectId,
                ref:"Vaiant"
            },
            product_sku: {
                type: String,
              },
              alter_qauntity: {
                type: Number,
              },
              purchase_price: {
                type: Number,
              },
              min_selling_price: {
                type: Number,
              },
            
          },
      ]
      

});

module.exports = mongoose.model("variant",variantSchema);

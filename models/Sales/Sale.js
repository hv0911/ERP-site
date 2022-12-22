const mongoose = require("mongoose");

const { Schema } = mongoose;

const saleSchema = new Schema({

    date:{
        type:Date,
        required:true, 
    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:"Customer",
            required:true,
    },
    location:{
        references: { type: [Schema.Types.ObjectId], refPath: 'model_type' },
        model_type: {  type: String, enum: ["Branch" , "Warehouse" ], required: true }   // changes
    },
    invoice_no:{
       type:String
    },
    po_no:{
        type:String
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"SingleProduct"
    },
    service:{
        type:Schema.Types.ObjectId,
        ref:"Service",
    },
    shipping_name:{
        type:String
    },
    discount:Number,
    discount_type:Number,
    payment_method:String,
    amount:Number,
    Order_note:String

});

module.exports = mongoose.model("Sale",saleSchema);
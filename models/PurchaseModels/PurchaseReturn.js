const mongoose = require("mongoose");

const { Schema } = mongoose;

const purchaseReturnSchema = new Schema({
    supplier:{
        type:Schema.Types.ObjectId,
        ref:"Supplier"
    },
    total_quantity:{
        type:Number
    },
    return_quantity:{
        type:Number
    },
    total_amount:{
        type:Number
    },
    return_amount:{
        type:Number
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"SingleProduct"
    },
    shipping_address:{
        type:String
    },
    date:{
        type:Date
    },
    candF_agent:{
        type:Schema.Types.ObjectId,
        ref:"CandF"
    },
    

});

module.exports = mongoose.model("purchaseReturn",purchaseReturnSchema);

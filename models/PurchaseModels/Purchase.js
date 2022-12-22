const mongoose = require("mongoose");

const {Schema } = mongoose;

const purchaseSchema = new Schema({
    
    supplier:{
        type:Schema.Types.ObjectId,
        ref:"Supplier"
    },
    location: {
        type:Schema.Types.ObjectId
    },
    date:Date,
    shipping_address:String,
    referenceNo:String,
    lc_no:String,
    candf_agent:{
        type:Schema.Types.ObjectId,
        ref:"CandF"
    },
    discount:Number,
    discount_type:Number,
    product:{
        type:Schema.Types.ObjectId,
        ref:"SingleProduct"
    },
    payment_method:{type:String },
    amount:Number,
    bank_name:String,
    branch:String,
    account_number:String,
    account_owner:String,

});

module.exports = mongoose.model("Purchase" , purchaseSchema);
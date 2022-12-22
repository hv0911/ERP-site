const mongoose = require("mongoose");
const {Schema } = mongoose;

const serviceSchema = new Schema({
    product_name: {
        type:String,
        required:true,
    },
    sku:String,
    hourly_rate :{
        type:String,
        required:true
    },
  decription:{
    type:String ,
  },

});

module.exports = mongoose.model("Service",serviceSchema);

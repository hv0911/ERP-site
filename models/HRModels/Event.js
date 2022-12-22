const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    for_whom:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    start_date:{
       type: Date,
        required:true,
    },
    to_date:{
       type:Date,
       required:true, 
    },
    description:String,

})

module.exports = mongoose.model("Event", eventSchema);
const mongoose = require("mongoose");

const { Schema } = mongoose;

const departmentSchema = new Schema({
    dep_name:{
        type:String,
        required:true,
    },
    details:String,
    status:{
        type:String,
        enum:["Active","DeActive"]
    }
});

module.exports = mongoose.model("Department",departmentSchema);
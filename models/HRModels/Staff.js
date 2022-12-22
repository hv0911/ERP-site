const mongoose = require("mongoose");
const {Schema} = mongoose;


// 1.Profile Picture  2.Signature

const staffSchema = new Schema({
    role:{
        type:Schema.Types.ObjectId,
        ref:"Role"
    },
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       unique:true,
       required:true,
    },
    phone:Number,
    password:{
        type:String,
        required:true
    },
    deparment:{
        type:Schema.Types.ObjectId,
        ref:"Department"
    },
    wareHouse:{
        type:Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    branch:{
        type:Schema.Types.ObjectId,
        ref:"Branch"
    },
    date_of_birth:{
        type:Date
    },
    current_address:{
        type:String
    },
    permanent_address:{
        type:String,
    },
    opening_balance:{
        type:Number
    },
    applicable_for_leave:{   // may be remove later
        type:Date              
    },

    //  Bank Info
    bank_name:{
        type:String
    },
    branch_name:{
        type:String
    },
    account_name:{
        type:String
    },
    account_number:{
        type:Number
    },

    // PAYROLL INFO     
    date_of_join:{
        type:Date,
    },
    basic_salary:{
        type:Number
    },
    employment_type:{
        type:String
    },
    provision_type:{
        type:Number
    },

    // for Attendance 

    attendance:[
        {
            date:Date,
            status:String,
            note:String
        },
    ]
});

module.exports = mongoose.model("Staff",staffSchema);

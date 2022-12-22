const mongoose = require("mongoose");

const { Schema } = mongoose;

const attendanceSchema = new Schema({
    staff:{
      type:Schema.Types.ObjectId,
      ref:"Staff"
    },
    date:Date,
    status:{
        type:String,
        enum:["Present" , "Late" , "Absent" , "Holiday" ]
    }
});

module.exports = mongoose.model("Attendance" , attendanceSchema) ;

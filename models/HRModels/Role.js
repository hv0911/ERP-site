const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
    role_name:String,
    r_type:{
        type:String,
        default:"regular user"
    }
});

module.exports = mongoose.model("Role", roleSchema);
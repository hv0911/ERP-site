const mongoose = require("mongoose");

const { Schema } = mongoose;

const CandFSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    status: {
        type: String,
        enum: ["ACTIVE", "DE-ACTIVE"]
    },
    address: String
});

module.exports = mongoose.model("CandF", CandFSchema);
        
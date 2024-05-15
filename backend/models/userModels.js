const mongoose = require("mongoose");

// create Schema
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type : String,
        unique : true,
        required : true
    },
    age: {
        type: Number
    }
}, {timestamps: true});

// create model
const User = mongoose.model('User', UserSchema)

module.exports = User;
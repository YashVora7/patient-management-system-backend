const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role:{type:String, enum:["patient","doctor"], required:true, default:"patient"},
    otp: { type: String },
    otpExpiresAt: { type: Date }
},{timestamps:true})

const userModel = new mongoose.model("user",userSchema)

module.exports = userModel
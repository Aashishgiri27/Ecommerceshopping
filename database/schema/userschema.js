const mongoose = require("mongoose");

const userschema=mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:Number,
        required:true
    },
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Mobileno:{
        type:Number,
        required:true
    }

})
const usermodel=mongoose.model('User',userschema)

module.exports=usermodel
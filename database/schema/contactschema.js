const mongoose = require("mongoose");

const userquery=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Subject:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true,
        unique:true
   },

},{   timestamps:true,
})
const userquerymodel=mongoose.model('Contact',userquery)

module.exports=userquerymodel
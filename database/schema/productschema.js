const mongoose = require("mongoose");

const productschema=mongoose.Schema({
    name:{
        type:String,
        // enum:["Shirt","t-Shirt","gens","Pants"],
        required:true
    },
    price:{
        type:Number,
        // enum:[200,630,500],

        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})
const productmodel=mongoose.model('Products',productschema)

module.exports=productmodel
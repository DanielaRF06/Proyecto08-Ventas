var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    cliente:{
        type:String,
        required:true
    },
    fecha:{
        type:Date.now,
        required: true
    },
    productos:[{_id:String,cantidad:Number}],
    subtotal:{
        type:Number,
        required:true
    },
    iva:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
});
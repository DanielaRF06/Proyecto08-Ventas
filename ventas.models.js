var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    cliente:{type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    fecha:{
        type:Date,
        default:Date.now,
        required: true
    },
    productos:[{
        _id:{type: mongoose.Schema.Types.ObjectId, ref: 'Producto'},
        cantidad:Number
    }],
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
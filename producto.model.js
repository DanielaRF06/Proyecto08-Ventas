var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    codigo:{
        type:String,
        required:true
    },
    p_compra:{
        type:Number,
        required:true
    },
    p_venta:{
        type:Number,
        required:true
    },
    marca:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Marca' 
    },
    cantidad:{
        type:Number,
        required:true
    },
    minimo:{
        type:Number,
        required:true
    },
    maximo:{
        type:Number,
        required:true
    }
});
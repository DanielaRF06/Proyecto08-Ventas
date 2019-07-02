var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    RFC:{
        type:String,
        required: true,
        match:/ r/
    },
    nombre:{
        type:String,
        required:true
    },
    domicilio:{
        type:String,
        required:true
    },
    telefono:{
        type:Number
    },
    email:{
        type:String,
        requiere: true,
        match: /.+@.+\..+/
    }
});
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    rfc:{
        type:String,
        required: true,
        match:/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/
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
        type:String
    },
    email:{
        type:String,
        requiere: true,
        match: /.+@.+\..+/
    }
});
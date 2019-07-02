var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    rfc:{
        type:String,
        required: true,
        //match:/ r/
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
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    marca:{
        type:String,
        required:true
    }
});
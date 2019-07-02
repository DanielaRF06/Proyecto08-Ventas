var mongoose = require('mongoose');
var schema = require('./clientes.model');

var Cliente = mongoose.model('Cliente',schema,'Clientes')

function insertarCliente(cliente){
    Cliente.save(function(error){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Registro exitoso");
    });
}

function allClientes(){
    Cliente.find({},function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" --- Clientes Registrados --- ");
        console.log(docs);
    });
}


mongoose.connect('mongodb://localhost:27017/DBVentas');

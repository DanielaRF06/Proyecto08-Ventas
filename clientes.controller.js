var mongoose = require('mongoose');
var schema = require('./clientes.model');

var Cliente = mongoose.model('Cliente',schema,'cliente');

function insertarCliente(cliente){
    Cliente.create(cliente,function(error){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Registro exitoso");
        process.exit(0);
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
        process.exit(0);
    });
}

function oneCliente(rfcCliente){
    Cliente.find({rfc: rfcCliente},
            function(error,docs){
                if(error){
                    console.log(error);
                    process.exit(1);
                }
                console.log(" Consulta de un registro");
                console.log(docs);
                process.exit(0);
            }
        );
}

function updateCliente(id,dom,em ,tel){
    Cliente.update({_id:id},{$set:{domicilio:dom,email:em,telefono:tel}},
            function(error,docs){
                if(error){
                    console.log(error);
                    process.exit(1);
                }
                console.log("  -- Datos actualizados --");
                console.log(docs);
                process.exit(0);
                
            });
}

function deleteCliente(idC){
    Cliente.findByIdAndRemove({_id:idC},
        function(error,docs){
            if(error,docs){
                console.log(error);
                process.exit(1);
            }

            console.log("--  Cliente Eliminado  --");
            console.log(docs);
            process.exit(0);
        });
}

module.exports.insertarCliente = insertarCliente;
module.exports.allClientes = allClientes;
module.exports.oneCliente = oneCliente;
module.exports.updateCliente = updateCliente;
module.exports.deleteCliente = deleteCliente;

mongoose.connect('mongodb://localhost:27017/DBVentas');

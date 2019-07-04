

//Insertar
async function insertarCliente(cliente,Cliente){
    var crearCliente = await Cliente.create(cliente).
            then((data)=>{
                console.log("Cliente registrado");
                return data;
            })
            .catch((error)=>{
                console.log("Error");
                return error;
            });
    return crearCliente;
}

async function allClientes(Cliente){
    var todosC = await Cliente.find({},function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" --- Clientes Registrados --- ");
        console.log(docs);
        process.exit(0);
    });

    return todosC;
}

async function oneCliente(rfcCliente,Cliente){
    var params={
        rfc:rfcCliente
    }
    var oneC= await Cliente.find(params).
            then((data)=>{
                console.log(" Datos  ");
                return data;
            })
            .catch((error)=>{
                console.log("Error");
                return error;
            });
            
    return oneC;
}

async function updateCliente(id,dom,em ,tel,Cliente){
    var upCliente = await Cliente.update({_id:id},{$set:{domicilio:dom,email:em,telefono:tel}},
            function(error,docs){
                if(error){
                    console.log(error);
                    process.exit(1);
                }
                console.log("  -- Datos actualizados --");
                console.log(docs);
                process.exit(0);
                
            });
    return upCliente;
}

async function deleteCliente(idC,Cliente){
    var params={
        _id:idC
    }
    var delCliente = await Cliente.findByIdAndRemove(params)
            .then((data) => {
                console.log("Producto Eliminado");
                return data;
            })
            .catch((error) => {
                console.log("Error!!!");
                return error;
            });
        return delCliente;
}

module.exports.insertarCliente = insertarCliente;
module.exports.allClientes = allClientes;
module.exports.oneCliente = oneCliente;
module.exports.updateCliente = updateCliente;
module.exports.deleteCliente = deleteCliente;


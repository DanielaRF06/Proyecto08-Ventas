




//Crear
function insertarMarca(marca){
    Marca.create(marca,function(error){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Registro exitoso");
        process.exit(0);
    });
}


async function createMarca(marca, Marca) {
    var marcaCreated = await Marca.create(marca)
        .then((data) => {
            console.log("Marca Guardada!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return marcaCreated;
}

//Buscar todos
function allMarcas(){
    Marca.find({}, function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" --- Todas las marcas --- ");
        console.log(docs);
        process.exit(0);
    });
}
//Buscar uno
function oneMarca(idMarca){
    Marca.find({_id: idMarca},
        function(error,docs){
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log(" Consulta de marca ");
            console.log(docs);
            process.exit(0);
        });
}
//Actualizar
function updateMarca(id,nommarca){
    Marca.update({_id:id}, {$set:{marca:nommarca}},
        function(error,docs){
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log("  -- Datos Actualizados --  ");
            console.log(docs);
            process.exit(0);
        });
}
//Eliminar

function deleteMarca(idM){
    Marca.findByIdAndDelete({_id:idM},
        function(error,docs){
            if(error,docs){
                console.log(error);
                process.exit(1);
            }
            console.log(" -- Marca Eliminada -- ");
            console.log(docs);
            process.exit(0);
        });
}

module.exports.insertarMarca = insertarMarca;
module.exports.allMarcas = allMarcas;
module.exports.oneMarca = oneMarca;
module.exports.updateMarca = updateMarca;
module.exports.deleteMarca = deleteMarca;
module.exports.createMarca = createMarca;







//Crear
async function insertarMarca(marca, Marca){
    var crearMarca = await Marca.create(marca)
        .then((data)=>{
                console.log(" Registro de marca exitoso");
                return data;
        })
        .catch((err)=>{
                console.log("Error al insertar");
                return err;
        });
    return crearMarca;
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
async function  allMarcas(Marca){
    var todasM = await Marca.find({}, function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" --- Todas las marcas --- ");
        console.log(docs);
        process.exit(0);
    });

    return todasM;
}
//Buscar uno
async function oneMarca(nomMarca,Marca){
    var params = {
        marca: nomMarca
    }
    var marcaN = await Marca.find(params)
                .then((data)=>{
                    return(data);
                })
                .catch((err)=>{
                    console.log("No se encontro");
                    return err;
                });
        
    return marcaN;
}
//Actualizar
async function updateMarca(id,nommarca,Marca){
    var upMarca = await Marca.update({_id:id}, {$set:{marca:nommarca}},
        function(error,docs){
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log("  -- Datos Actualizados --  ");
            console.log(docs);
            process.exit(0);
        });

    return upMarca;
}
//Eliminar
async function deleteMarca(idM,Marca){
    var params={
        _id:idM
    }

    delMarca = await Marca.findByIdAndDelete(params)
            .then((data) => {
                console.log("Producto Eliminado");
                return data;
            })
            .catch((error) => {
                console.log("Error!!!");
                return error;
            });
    return delMarca;
        
}

module.exports.insertarMarca = insertarMarca;
module.exports.allMarcas = allMarcas;
module.exports.oneMarca = oneMarca;
module.exports.updateMarca = updateMarca;
module.exports.deleteMarca = deleteMarca;
module.exports.createMarca = createMarca;


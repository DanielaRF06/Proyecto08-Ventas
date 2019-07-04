var marcaController = require("./marca.controller");



async function create(productos, marca, Productos, Marca) {

    var marca = {
        marca: marca
    };

    var marcaCreated = await marcaController.insertarMarca(marca, Marca);

    product["marca"] = marcaCreated._id;

    var productosCreated = await Productos.create(productos)
        .then((data) => {
            console.log("Producto Guardado!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
        
            return error;
     
        });
    return productosCreated;
}


async function BusquedaPrecioProducto(precioToFind, Productos) {

    var params = {
        p_venta: precioToFind
    }

    var productosFind = await Productos.find(params)
        .populate("marca")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return productosFind;
}

//Populate 

async function BusquedaGeneralProductos(){
    var params= {} 
var productosFind = await Productos.find(params)
.populate("marca")
.then ((data)=> { 
    return data; 
}) 
.catch ((err)=>{ 
    console.log ("No encontrado"); 
    return err; 
});
return productosFind; 
}



async function BuscaEliminaProducto(codigoToDelete, Productos) {
    var params = {
        codigo: codigoToDelete
    }
    var codigoToDelete = await Productos.findByIdAndRemove(params)
    .populate("marca")
    .then((data)=> { 
        return data; 
    })
    .catch((err)=> { 
        console.log ("Not Found"); 
        return err; 
    }); 
return codigoToDelete;
}

async function productosActualizar (codigoProducto ,Productos){ 
        var params = {
            codigo: codigoProducto
        }
        var codigoProducto = await Productos.update(params)
        .populate("marca")
        .then((data)=> { 
            return data; 
        })
        .catch((err)=> { 
            console.log ("Not Found"); 
            return err; 
        }); 
    return codigoProducto;
    }
    
    
module.exports.create = create;
module.exports.BusquedaPrecioProducto =BusquedaPrecioProducto;
module.exports.BusquedaGeneralProductos = BusquedaGeneralProductos;
module.exports.BuscaEliminaProducto =  BuscaEliminaProducto
module.exports.productosActualizar=productosActualizar;

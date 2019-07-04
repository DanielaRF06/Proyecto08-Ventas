var clienteController = require('./clientes.controller');
var productoController = require('./productos.controller');

async function create(productos,cliente,venta,Productos,Cliente,Venta){    
     /** CLIENTES */
    var cliente = await clienteController.insertarCliente(cliente,Cliente);
    var producto = await productoController.BusquedaPrecioProducto(productos,Productos);
    venta["cliente"]=cliente._id;
    venta["productos"]={"_id":producto._id,"cantidad":producto.cantidad};


    var ventaCreate = await Venta.create(venta)
        .then((data) =>{
            console.log("Venta registrada");
            return data;
        })
        .catch((error) =>{
            console.log("error de venta");
            return error;
        });
        return ventaCreate;

}

module.exports.create = create;

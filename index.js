var mongoose = require("mongoose");
const clienteController = require("./clientes.controller");
const productoController = require("./producto.controller");

var marcaSchema = require("./marca.model");
var clienteSchema = require("./clientes.model");
var productoSchema = require ("./producto.model");

mongoose.connect('mongodb://localhost:27017/DBVentas',{ useNewUrlParser: true } );

var Marca = mongoose.model('Marca',marcaSchema,'marcas');
var Cliente = mongoose.model('Cliente',clienteSchema,'clientes');
var Producto = mongoose.model('Producto',productoSchema,'productos');


async function crearCliente(){
    var c = {
        rfc: "VECJ880326A7A",
        nombre: "Daniela",
        domicilio: "Xalisco Nay",
        telefono: "123",
        email: "daniela@ruiz.io"
    };
     /** CLIENTES */
     var clienteCreado = await clienteController.insertarCliente(c,Cliente);
     console.log("Cliente creado");
     console.log(clienteCreado);
   
}
  /************  MARCAS  */
/*
async function crearMarca(){
    var m = {
        marca:"Lenovo"
    };

     var marcaCreada = await marcaController.insertarMarca(m,Marca);
     console.log("Marca creada");
     console.log(marcaCreada);
}
*/

async function createBrandAndProduct() {
    var producto = {
        codigo: "asd123",
        p_compra: 100,
        p_venta: 50,
        cantidad: 1,
        minimo:2,
        maximo:5,
    };
    
    const marca = "Apple";
    
    var productoCreated = await productoController.create(producto, marca, Producto, Marca);
    console.log("------- Producto Creado --------");
    console.log(productoCreated);
    
}

//crearCliente();
createBrandAndProduct();

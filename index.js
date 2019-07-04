var mongoose = require("mongoose");
const clienteController = require("./clientes.controller");
const productoController = require("./producto.controller");


const marcaController = require('./marca.controller');
const clienteController = require('./clientes.controller');
const productoController = require('./productos.controller');
const ventaController = require('./ventas.controller');
var marcaSchema = require('./marca.model');
var clienteSchema = require('./clientes.model');
var productoSchema = require('./productos.model');
var ventasSchema = require('./ventas.models');

mongoose.connect('mongodb://localhost:27017/DBVentas',{useNewUrlParser:true});

var Marca = mongoose.model('Marca',marcaSchema,'marcas');
var Cliente = mongoose.model('Cliente',clienteSchema,'clientes');
var Producto = mongoose.model('Producto',productoSchema,'producto');
var Venta = mongoose.model('Venta',ventasSchema,'venta');

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
async function allClientes(){
    var buscarTodos = await clienteController.allClientes(Cliente);
     console.log("Todos los registros");
     console.log(buscarTodos);
}
async function oneCl(rfcC){
    
    var buscarUno = await clienteController.oneCliente(rfcC,Cliente);
     console.log(" Registro ");
     console.log(buscarUno);
}
async function upCliente(id,dom,email,telefono) {
     var actualizar = await clienteController.updateCliente(id,dom,email,telefono,Cliente);
     console.log(" Registro ");
     console.log(actualizar);
}
async function delCliente(idCliente){
    var del = await clienteController.deleteCliente(idCliente,Cliente);
     console.log(" Eliminado ");
     console.log(del);
}
  /************  MARCAS  */

async function crearMarca(){
    var m = {
        marca:"Lenovo"
    };

     var marcaCreada = await marcaController.insertarMarca(m,Marca);
     console.log("Marca creada");
     console.log(marcaCreada);
}


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
        var m ={
            marca:"Honda"
        }
     var marcaCreada = await marcaController.insertarMarca(m,Marca);
     console.log("Marca creada");
     console.log(marcaCreada);

 async function allMarcas(){
    var buscarTodas = await marcaController.allMarcas(Marca);
     console.log("Todos los registros");
     console.log(buscarTodas);
}
async function unaMarca(m){
    
    var buscarUna = await marcaController.oneMarca(m,Marca);
     console.log(" Registro ");
     console.log(buscarUna);
}
async function upMarca(id,nomM) {
     var actualizar = await marcaController.updateMarca(id,nomM,Marca);
     console.log(" Registro ");
     console.log(actualizar);
}
async function delMarca(idMarca){
    var del = await marcaController.deleteMarca(idMarca,Marca);
     console.log(" Eliminado ");
     console.log(del);
}

                        /** Ventas */
async function crearVenta(){
    var venta = {
        subtotal:0,
        iva:0,
        total:0
    };

    var precio=15;
    
    var cliente={
        rfc: "ABCJ880326A7A",
        nombre: "Carlos",
        domicilio: "TepicNay",
        telefono: "12345",
        email: "carlos@ruiz.io"
    };
    
    var insertarVenta = await ventaController.create(precio,cliente,venta,Producto,Cliente,Venta);
    console.log("---venta creada---");
    console.log(insertarVenta);


}           
        /***    Clientes */
//crearCliente();
//allClientes();
//oneCl("ABCJ880326A7A");
//upCliente("5d1ce4fcfed96115b862ccbf","otro","otro","otro");
//delCliente("5d1ce4fcfed96115b862ccbf");
     /**    Marcas */


//crearMarca();
//allMarcas();
//unaMarca("Lenovo");
//upMarca("5d1ce4fcfed96115b862ccc0","Toshiba 2.0");
//delMarca("5d1d10bde655352a582da09e")


/** metodos venta */
//crearVenta();

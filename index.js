var mongoose = require('mongoose');

const marcaController = require('./marca.controller');
const clienteController = require('./clientes.controller');
var marcaSchema = require('./marca.model');
var clienteSchema = require('./clientes.model');

mongoose.connect('mongodb://localhost:27017/DBVentas');

var Marca = mongoose.model('Marca',marcaSchema,'marcas');
var Cliente = mongoose.model('Cliente',clienteSchema,'clientes');

    /***Clientes */
async function crearCliente(){
    var c = {
        rfc: "ABCJ880326A7A",
        nombre: "Carlos",
        domicilio: "TepicNay",
        telefono: "12345",
        email: "carlos@ruiz.io"
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
/*
async function crearMarca(){
        var m ={
            marca:"Honda"
        }
     var marcaCreada = await marcaController.insertarMarca(m,Marca);
     console.log("Marca creada");
     console.log(marcaCreada);
}*/
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
        /***    Clientes */
//crearCliente();
//allClientes();
//oneCl("ABCJ880326A7A");
//upCliente("5d1ce4fcfed96115b862ccbf","otro","otro","otro");
//  |delCliente("5d1ce4fcfed96115b862ccbf");

        /**    Marcas */


//crearMarca();
//allMarcas();
//unaMarca("Lenovo");
//upMarca("5d1ce4fcfed96115b862ccc0","Toshiba 2.0");
//delMarca("5d1d10bde655352a582da09e")


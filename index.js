var mongoose = require('mongoose');

const marcaController = require('./marca.controller');
const clienteController = require('./clientes.controller');
var marcaSchema = require('./marca.model');
var clienteSchema = require('./clientes.model');

mongoose.connect('mongodb://localhost:27017/DBVentas');

var Marca = mongoose.model('Marca',marcaSchema,'marcas');
var Cliente = mongoose.model('Cliente',clienteSchema,'clientes');


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
crearCliente();
crearMarca();

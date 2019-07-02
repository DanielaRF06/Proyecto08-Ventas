var clienteController = require('./clientes.controller');

var cliente = {
    rfc: "rfcPrueba",
    nombre: "Daniela",
    domicilio: "Xalisco Nay",
    telefono: "123",
    email: "daniela@ruiz.io"
};

clienteController.insertarCliente(cliente);
//clienteController.allClientes();
//clienteController.oneCliente("rfcPrueba");
//clienteController.updateCliente("5d1b7741d9f9483268979f3f","nuevo","email@com.io","tele");
//clienteController.deleteCliente("5d1b7741d9f9483268979f3f");
const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

function filtrarApartamentoComComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);
const filtrados2 = filtrarApartamentoComComplemento(clientes);

console.log(filtrados2);
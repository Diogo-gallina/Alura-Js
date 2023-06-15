//Reqisitando dados Json
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//Transformando objeto em String
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

//Transformando String em objeto
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente);
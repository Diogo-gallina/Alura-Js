const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "344334544", 
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem 32 anos ${cliente.idade}`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);




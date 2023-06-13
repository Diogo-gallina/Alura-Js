const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "344334544", 
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem 32 anos ${cliente["idade"]}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})


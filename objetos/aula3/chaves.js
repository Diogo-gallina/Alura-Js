const cliente = {
    nome: "João",
    idade: 24,
    email: "j0ao@firma.com",
    telefone: ["1155555550", "1144444440"]
};

cliente.endereco = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    } 
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. é necessário ter um endereco cadastrado");
}
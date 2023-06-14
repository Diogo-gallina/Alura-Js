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

function ligaParaCliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda ={
    destinatario: cliente.nome,
    ...cliente.endereco[0]
}

console.log(encomenda);
const cliente = {
    nome: "João",
    idade: 24,
    email: "j0ao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200, 
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("saldo insulfiiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamendo realizado. Novo saldo ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(199);
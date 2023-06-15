const livros = require("./listaLivros");

function menorValor(array, posicaoInicial){
    let maisBarato = posicaoInicial;

    for(let i = 0; i < array.length; i++){
        if(array[i].preco < array[maisBarato].preco){
            maisBarato = i;
        }
    }

    return maisBarato;
}

module.exports = menorValor;
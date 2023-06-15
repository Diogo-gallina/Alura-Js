const livro = require("./listaLivros");
const menorValor = require("./menorValor");

for(let i = 0; i < livros.length; i++){
    if(livros[i].preco < livros[maisBarato].preco){
       maisBarato = i;
   }
}
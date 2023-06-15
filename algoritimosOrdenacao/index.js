const livros = require("./listaLivros");

let maisBarato = 0;

for(let i = 0; i < livros.length; i++){
     if(livros[i].preco < livros[maisBarato].preco){
        maisBarato = i;
    }
}

console.log(`o livro ${livros[maisBarato].titulo} é o mais barato, e custa ${livros[maisBarato].preco}`);
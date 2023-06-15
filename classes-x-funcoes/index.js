class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} que contém ${this.paginas} paginas`)
    }
}

const NodeJs = new Livro("Primeiros passos com NodeJs","Casa do Codigo", 195);
NodeJs.anunciarTitulo();
NodeJs.descreverTitulo();

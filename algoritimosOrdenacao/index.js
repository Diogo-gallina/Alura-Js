const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for(let i = 0; i < precosLivros.length; i++){
     if(precosLivros[i] < precosLivros[maisBarato]){
        maisBarato = i;
    }
}

console.log(`o livro mais barato cuta ${precosLivros[maisBarato]}`);
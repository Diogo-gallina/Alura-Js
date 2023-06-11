const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    // if(nota + 1 >= 10){
    //     return 10;
    // }else{
    //     return nota + 1
    // }
    //OU ULTILIZANDO IF TERNÁRIO
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas)
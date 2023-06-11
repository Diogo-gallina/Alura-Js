const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach(nota => {
    soma += nota;
});

// OU

// notas.forEach(function(nota){
//     soma += nota;
// });

const media = soma / notas.length;
console.log(media)
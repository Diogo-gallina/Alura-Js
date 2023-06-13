
//------------------
// Nível intermediário:
// a) Crie um array com cinco números chamado "numbers".
// b) Some todos os números do array e armazene o resultado em uma variável chamada "sum".
// // c) Imprima o valor da soma no console.
// const numbers = [10 , 15, 20, 5];
// const somaArray = numbers.reduce((acc, somaArray) => somaArray + acc, 0);
// console.log(somaArray);
//-------------------


//----------------------------------
// Nível intermediário:
// a) Crie um array com dez números aleatórios chamado "randomNumbers".
// b) Encontre o maior número do array e imprima-o no console.
// const randomNumbers = [2, 5, 6, 4, 20, 45, 32, 12, 37, 29];
// let maior = randomNumbers[0]; 
// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] > maior) {
//     maior = randomNumbers[i];
//   }
// }
// console.log(maior);
//------------------------------------



//---------------------------------
// Nível intermediário:
// a) Crie um array com cinco nomes de países chamado "countries".
// b) Ordene o array em ordem alfabética e imprima-o no console.
// const countries = ["Brasil", "Holanda", "México", "Arábia", "Australia"];
// countries.sort();
// console.log(countries);
//-----------------------------------




//---------------------------------
// Nível intermediário:
// a) Crie um array com dez números chamado "numbers".
// b) Verifique se todos os números do array são pares.
// c) Imprima "Todos os números são pares" ou "Existem números ímpares" no console.
// const numbers = [2, 2, 4, 6, 4, 2];
// numbers.forEach(n => {
//     result = false;
//     if (n%2 == 0){
//         result = true;
//     } else{
//         result = false;
//     }
// });
// if (result == true){
//     console.log("Contem apenas numeros pares");
// } else{
//     console.log("Contem numeros ímpares");
// }
//-----------------------------------




//-------------------------
// Nível intermediário:
// a) Crie um array com cinco nomes de cidades chamado "cities".
// b) Crie um novo array chamado "capitalizedCities" que contenha os nomes das cidades com a primeira letra maiúscula.
// c) Imprima o novo array no console.
// const cities = ["rio de janeiro", "são paulo", "nova york", "londres", "paris"];
// const capitalizedCities = cities.map((city) => {
//     return city.charAt(0).toUpperCase() + city.slice(1);
// });
// console.log(capitalizedCities);
//-------------------------

//-----------------------------------------
// Nível intermediário:
// a) Crie um array com dez números aleatórios chamado "randomNumbers".
// b) Crie um novo array chamado "doubledNumbers" que contenha cada número do array original multiplicado por 2.
// c) Imprima o novo array no console.
// const random = [2, 4, 13, 24, 56, 54, 32];
// const doubledNumbers = [];
// random.forEach(num => doubledNumbers.push(num * 2));
// console.log(doubledNumbers)
//-------------------------------------------


//-------------------------------------------
// Nível intermediário:
// a) Crie um array com cinco nomes de animais chamado "animals".
// b) Verifique se o array contém o animal "gato".
// c) Imprima "O array contém o animal 'gato'" ou "O array não contém o animal 'gato'" no console.

// const animals = ["elefante", "cachorro", "grilo", "gato"];
// let contem = false;
// animals.forEach((animal) => {
//     if (animal.includes("gato")){
//         contem = true; 
//     }else{
//         contem = false
//     }
// });

// if (contem == true){
//     console.log("O array contém o animal 'gato'");
// }else{
//     console.log("O array não contém o animal 'gato'");
// }

//-------------------------------------------
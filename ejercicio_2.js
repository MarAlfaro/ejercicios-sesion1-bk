/*Crea un programa que cuente el número de caracteres
 en una cadena ingresada por el usuario.*/
 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena de texto: ', (cadena) =>{
    console.log(`Numero de caracteres: ${cadena.length}`)
});

rl.close();

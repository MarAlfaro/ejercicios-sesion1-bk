/*Escribe un programa que tome una cadena ingresada por el usuario 
y la muestre completamente en mayúsculas.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra ', (palabra) => {
    console.log(palabra.toUpperCase());
});


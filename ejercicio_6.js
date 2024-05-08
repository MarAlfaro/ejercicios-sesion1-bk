/*Crea un programa que cuente el número de palabras 
en una frase ingresada por el usuario.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    console.log(`Numero de palabras: ${palabras.length}`)
});
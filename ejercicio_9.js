/*Escribe un programa que cuente el número de vocales 
en una palabra ingresada por el usuario.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length:0;
    console.log(`Número de vocales: ${numeroVocales}`);
});
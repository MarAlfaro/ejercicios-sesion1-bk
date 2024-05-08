/*Crea un programa que verifique si una palabra ingresada
 por el usuario es un palíndromo (se lee igual de adelante hacia atrás).*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida)  {
        console.log(`${palabra} es un palíndromo`)
    }else{
        console.log(`${palabra} no es un palíndromo`)
    }
})
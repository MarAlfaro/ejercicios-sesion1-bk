/*Escribe un programa que tome una cadena ingresada por el usuario 
y extraiga una subcadena de ella.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) =>{
    const inicio = 2;
    const longitud = 5;
    const subcadena = cadena.substring(inicio, inicio + longitud);
    console.log(`Subcadena es: ${subcadena}`);
})
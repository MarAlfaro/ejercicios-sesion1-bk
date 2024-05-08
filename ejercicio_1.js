/*Escribe un programa que solicite al usuario su nombre y apellido por separado,
 y luego muestre un mensaje de saludo concatenando ambos.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su apellido: ', (apellido) =>{
        console.log(`Hola mi nombre es ${nombre} ${apellido}`)
    })
});

rl.close();
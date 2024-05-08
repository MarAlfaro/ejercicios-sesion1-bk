/*Crea un programa que tome una frase ingresada por el usuario 
y reemplace una palabra específica por otra.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraCambiar) =>{
        rl.question('Ingrese la palabra nueva: ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
            console.log('Frase modificada: ', fraseModificada)  
        })
    })
})
/* Criar um algoritmo em JAVASCRIPT que leia um número (NUM), 
e depois leia NUM números inteiros e imprima o menor deles. */
const prompt = require("prompt-sync")()
let quant = Number(prompt("Quantidade: "))
let num, menor =  Number.MAX_VALUE
for (let c = 1; c <= quant; c++ ) {
    num = Number(prompt("Numero: "))
    if (num < menor) {
        menor = num
    }
}
console.log("menor:", menor)
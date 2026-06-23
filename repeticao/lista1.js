/* Criar um algoritmo em JAVASCRIPT que leia um número (NUM), 
e depois leia NUM números inteiros e imprima o maior deles. */
const prompt = require("prompt-sync")()
let quant = Number(prompt("Quantidade: "))
let num, c = 1, maior = Number.MIN_VALUE
while (c <= quant) {
    num = Number(prompt("Numero: "))
    if (num > maior) {
        maior = num
    }
    c++   // c +=1
}
console.log("Maior:", maior)
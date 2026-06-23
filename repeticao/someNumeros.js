const prompt = require("prompt-sync")()
/**
 * Leia números 
 * até que -1 seja digitado 
 * e calcule a soma.
 */
let soma = 0, num =0
do {
    num = Number(prompt("> "))
    if (num != -1) 
        soma = soma + num
} while(num != -1)
console.log("Soma : " + soma)
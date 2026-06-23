const prompt = require("prompt-sync")()
console.log("  --- TABUADA DE MULTIPLICACAO ---")
let num = Number(prompt("Informe o número da tabuada: "))
let c= 1
while ( c <= 10) {
    console.log(num + " * " + c + " = " + (num * c) )   // 7 * 1 = 7   
    c += 1
}     

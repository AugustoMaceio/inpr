const prompt = require("prompt-sync")()
console.log("  --- TABUADA DE MULTIPLICACAO ---")
let num = 1
while (num <= 10) {
    c= 1
    console.log("\n Tabuada de " + num + ":")
    while ( c <= 10) {
        console.log(num + " * " + c + " = " + (num * c) )   // 7 * 1 = 7   
        c += 1
    } 
    num += 1   
}

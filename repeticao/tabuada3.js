const prompt = require("prompt-sync")()
console.log("  --- TABUADA DE MULTIPLICACAO ---")

for (let num = 1; num <= 10; num += 1 ) {
    console.log("\n Tabuada de " + num + ":")
    for (let c= 1; c <= 10; c += 1) {
        console.log(num + " * " + c + " = " + (num * c) )   // 7 * 1 = 7   
    } 
}
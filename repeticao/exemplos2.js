const prompt = require("prompt-sync")()
let opcao = 0;
do {  
 console.log("\n=== MENU ==="); 
 console.log("1. Opção A");  
 console.log("2. Opção B");  
 console.log("3. Sair");     
 opcao = prompt("opção : "); 
 console.log("Você escolheu: " + opcao);    
 if (opcao == 1) {       
    console.log("Executando opção A...");  } 
 else if (opcao == 2) {    
    console.log("Executando opção B...");  
 } 
}while (opcao != 3);
console.log("Programa encerrado.");
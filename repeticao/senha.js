const prompt = require("prompt-sync")()
let secreta = Math.floor(Math.random() * 9) + "" 
                + Math.floor(Math.random() * 9) 
                + Math.floor(Math.random() * 9);
  // senha secreta para autenticação
do {
    senha = prompt("Digite a senha: ")
} while (secreta != senha)
console.log("Acesso autorizado.")    
console.log("Fim do programa.")  
/* Crie um jogo de adivinhação: 
o programa gera um número aleatório (1-10) 
e o usuário tenta adivinhar. Em 10 chances. */
const prompt = require("prompt-sync")()
aleatorio = Math.random()
console.log(aleatorio)
aleatorio = parseInt( aleatorio * 10) + 1

for( i=1; i<=10; i++){
    if (prompt("adivinhe o número (1 a 10): ")==aleatorio) {
        console.log("adivinhou.")
        i++
        break;
    }
}
console.log(i-1, "tentativas.");
console.log(aleatorio)
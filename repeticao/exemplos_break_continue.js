const prompt = require("prompt-sync")()
while (true) {
    if (prompt("senha: ")=="senha") break;
}
console.log("o break fez sair do while true")

for ( let i= 1; i <= 10; i+=1){
    if (i % 2 == 0) continue;
    console.log(i)
}
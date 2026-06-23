/** Leia 5 alunos com 3 notas cada 
 * e calcule a média de cada aluno. */
const prompt = require('prompt-sync')()
let str_aluno, soma, nota, media
for (let i=1; i<=5; i++){
    str_aluno = "Aluno "+ i + ": "
    console.log(str_aluno)
    soma = 0
    for(let j=1;j<4;j++){
        nota = Number(prompt(`nota ${j}:`))
        soma = soma + nota
    }
    media = soma/3
    console.log("Média do",str_aluno, media, "\n")
}
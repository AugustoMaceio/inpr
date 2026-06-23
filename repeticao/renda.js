/**Num instituto cada aluno possui os seguintes dados: 
- Renda pessoal; 
- Renda familiar; 
- Total gasto com alimentação; 
- Total gasto com outras despesas; 
Criar um algoritmo em JAVASCRIPT que imprima a porcentagem dos alunos 
que gasta acima de R$ 200,00 com outras despesas, 
o número de alunos com renda pessoal maior que renda familiar 
e a porcentagem gasta com alimentação e outras despesas em relação 
às rendas pessoal e familiar. 
O algoritmo acaba quando se digita 0 para a renda pessoal.
 */
const prompt = require("prompt-sync")()
let renda_pessoal, renda_familiar, gasto_alimentacao, outras_despesas
let porcent_acima200, alunos_renda_maior = 0, porcent_alimentacao, porcent_outras_despesas
let num_alunos = 1, quant_acima200 = 0
do {
    renda_pessoal = parseFloat(prompt(`Renda Pessoal do aluno ${num_alunos}: `))
    if (renda_pessoal == 0) break;
    renda_familiar = parseFloat(prompt(`Renda familiar do aluno ${num_alunos}: `))
    gasto_alimentacao = Number(prompt(`Gasto com alimentação do aluno ${num_alunos}: `))
    outras_despesas = Number(prompt(`Gasto com outras despesasr do aluno ${num_alunos}: `))
    if (outras_despesas > 200)
        quant_acima200 += 1
    if (renda_pessoal > renda_familiar)
        alunos_renda_maior += 1
    porcent_alimentacao = gasto_alimentacao / (renda_pessoal + renda_familiar) * 100
    console.log(` Gasto com alimentacao sobre renda:  ${porcent_alimentacao.toFixed(2)}%.`)
    porcent_outras_despesas = outras_despesas / (renda_pessoal + renda_familiar) * 100
    console.log(` Gasto com outras despesas sobre renda:  ${porcent_outras_despesas.toFixed(2)}%.`)

    num_alunos++
} while (renda_pessoal != 0)
console.log("porcentagem dos alunos que gasta acima de R$ 200,00 com outras despesas:",
    quant_acima200 / (num_alunos - 1) * 100, "%")
console.log("o número de alunos com renda pessoal maior que renda familiar: ",
    alunos_renda_maior)
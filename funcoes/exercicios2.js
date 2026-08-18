/* 
Criar uma função somar(a, b) e testar com diferentes números.
*/
function somar(a, b){
    return a + b
}

console.log(`4 + 6 = ${somar(4, 6)}`)
console.log(`-4 + 6 = ${somar(-4, 6)}`)
console.log(`7 + 5 = ${somar(7, 5)}`)
console.log(`92433 + 3343 = ${somar(92433, 3343)}`)

/*Transformar o cálculo do IMC em função que também imprime o resultado.*/
function IMC(peso, altura) {
    return peso / altura ** 2
}
// 2
function analisarIMC(imc) {
    if (Number.isNaN(imc)) 
        return "valor do imc inválido."
    else if (imc < 18.5)
        return "🔵BAIXO PESO"
    else if (imc < 24.9)
        return "🟢PESO NORMAL"
    else if (imc < 29.9)
        return "🟡SOBREPESO"
    else if (imc < 35)
        return "🟠OBESIDADE"
    else
        return "🟥OBESIDADE EXTREMA"
}
const prompt = require("prompt-sync")()
console.log("===   Calculo do IMC     ===")
peso = parseFloat(prompt("Peso (Kg): "))
altura = parseFloat(prompt("Altura (m): "))
seuIMC = IMC(peso, altura)
console.log( "IMC:", seuIMC,analisarIMC(seuIMC ))

/*Adaptar estacao(dia, mes) para receber data como objeto ou string.
Criar uma função que calcule a área de um triângulo e outra que calcule o perímetro. 
*/

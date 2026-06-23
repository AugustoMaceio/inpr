const prompt = require("prompt-sync")()

// 1 - função da área do círculo
function areaCirculo(raio) {
    return Math.PI * raio ** 2
}

// 2 - função para calcular o IMC = peso / altura ** 2,
//  onde peso é em Kg e altura em metros
function IMC(peso, altura) {
    return peso / altura ** 2
}
// 2
function analisarIMC(imc) {
    if (imc < 18.5)
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
// 3
function saudacao(hora) {
    if (hora > 4 && hora < 12)
        return "Bom dia!"
    else if (hora < 18)
        return "Boa tarde!"
    else
        return "Boa noite!"
}

/** 4) Cria uma função que classifique a substância conforme o seu pH.
 *  O pH é uma escala de 0 a 14 utilizada para determinar 
 * o grau de acidez de uma solução, sendo possível classificá-la 
 * como ácida (pH < 7), básica (pH > 7) ou neutra (pH = 7).
*/
function classificarPH(ph) {
    if (ph < 7) {
        return "ÁCIDA"
    }
    else if (ph > 7) {
        return "BÁSICA"
    } else
        return "NEUTRA"
}


let ph = Number(prompt("Indique o PH da solução: "))
console.log("A solução é classificada como", classificarPH(ph))

/*
console.log("A área do circulo com raio = 6 é", areaCirculo(6))


console.log(" --- CALCULO DO IMC ---")
let p = prompt("Informe o seu peso(Kg): ")
let a = prompt("Informe a sua altura(metro): ")
console.log("O seu IMC é", IMC(p, a))
console.log("Este IMC indica", analisarIMC(IMC(p, a)))
console.log(saudacao(9))

*/
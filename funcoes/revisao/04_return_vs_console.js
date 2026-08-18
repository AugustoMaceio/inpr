/* ============================================================
   REVISÃO DE FUNÇÕES — 04: return × console.log
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   return      -> DEVOLVE um valor para quem chamou a função.
                  Esse valor pode ser guardado, somado, comparado
                  e passado para outra função (encadeamento).
   console.log -> só MOSTRA na tela. Não devolve nada.

   Na metáfora da máquina de suco:
   - return é o copo de suco saindo da máquina (dá para beber,
     guardar na geladeira, misturar com outro suco);
   - console.log é uma fotografia do suco colada na parede
     (bonita de ver, mas ninguém bebe).

   ⚠️ Função SEM return devolve undefined.
   ============================================================ */

function linha() {
    return "=".repeat(52)
}

// VERSÃO 1 — com return: devolve o resultado.
function somaComRetorno(a, b) {
    return a + b
}

// VERSÃO 2 — sem return: só imprime. Devolve undefined.
function somaQueSoImprime(a, b) {
    console.log(a + b)
}

console.log(linha())
console.log("AS DUAS VERSÕES CHAMADAS DIRETAMENTE")
console.log(linha())

console.log("somaComRetorno(3, 4)   ->", somaComRetorno(3, 4))
console.log("somaQueSoImprime(3, 4) -> veja a linha impressa abaixo:")
somaQueSoImprime(3, 4)
console.log("Na tela as duas parecem iguais. O problema aparece agora.")
console.log()

console.log(linha())
console.log("GUARDANDO O RESULTADO EM UMA VARIÁVEL")
console.log(linha())

let resultado1 = somaComRetorno(3, 4)
let resultado2 = somaQueSoImprime(3, 4)   // essa chamada imprime 7 sozinha

console.log(`resultado1 (com return) = ${resultado1}`)
console.log(`resultado2 (sem return) = ${resultado2}   <- undefined! Não veio nada.`)
console.log()

console.log(linha())
console.log("USANDO O RESULTADO EM UMA NOVA CONTA")
console.log(linha())

console.log(`resultado1 * 10 = ${resultado1 * 10}`)
console.log(`resultado2 * 10 = ${resultado2 * 10}   <- NaN: não é número!`)
console.log()
console.log("NaN significa 'Not a Number' — não é um número.")
console.log("undefined * 10 não faz sentido, então o JavaScript devolve NaN.")
console.log()

console.log(linha())
console.log("SOMANDO DUAS CHAMADAS (só o return permite)")
console.log(linha())

console.log(`somaComRetorno(1, 2) + somaComRetorno(3, 4) = ${somaComRetorno(1, 2) + somaComRetorno(3, 4)}`)
console.log("Com a versão sem return isso daria NaN, porque undefined + undefined não é conta.")
console.log()

/* ------------------------------------------------------------
   O PONTO ALTO: ENCADEAMENTO
   Uma função recebendo o RETORNO de outra função.
   Só funciona porque IMC tem return.
   ------------------------------------------------------------ */

// Funções do professor (arquivos funcoes/exercicios.js e exercicios2.js)
function IMC(peso, altura) {
    return peso / altura ** 2
}

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

console.log(linha())
console.log("⚖️ ENCADEAMENTO: analisarIMC(IMC(peso, altura))")
console.log(linha())

let peso = 72
let altura = 1.78

// Passo a passo, com variável no meio (mais fácil de entender):
let meuIMC = IMC(peso, altura)
console.log(`Passo 1 — IMC(${peso}, ${altura}) devolve ${meuIMC.toFixed(2)}`)
console.log(`Passo 2 — analisarIMC(${meuIMC.toFixed(2)}) devolve ${analisarIMC(meuIMC)}`)

// Tudo de uma vez: o return de IMC vira o argumento de analisarIMC.
console.log(`Tudo junto  — analisarIMC(IMC(${peso}, ${altura})) -> ${analisarIMC(IMC(peso, altura))}`)
console.log()

console.log("Mais pessoas:")
console.log(`50 kg / 1.75 m -> IMC ${IMC(50, 1.75).toFixed(2)} -> ${analisarIMC(IMC(50, 1.75))}`)
console.log(`68 kg / 1.70 m -> IMC ${IMC(68, 1.7).toFixed(2)} -> ${analisarIMC(IMC(68, 1.7))}`)
console.log(`85 kg / 1.72 m -> IMC ${IMC(85, 1.72).toFixed(2)} -> ${analisarIMC(IMC(85, 1.72))}`)
console.log(`105 kg / 1.65 m -> IMC ${IMC(105, 1.65).toFixed(2)} -> ${analisarIMC(IMC(105, 1.65))}`)
console.log()

console.log(linha())
console.log("📌 RESUMO")
console.log(linha())
console.log("• Precisa apenas MOSTRAR algo? console.log resolve.")
console.log("• Precisa REAPROVEITAR o valor depois? Use return.")
console.log("• Na dúvida, use return e imprima na hora de chamar:")
console.log("  console.log(somaComRetorno(2, 3))  -> o melhor dos dois mundos.")
console.log()
console.log(linha())
console.log("Fim do arquivo 04. Próximo: node 05_escopo.js")
console.log(linha())

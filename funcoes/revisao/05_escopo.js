/* ============================================================
   REVISÃO DE FUNÇÕES — 05: ESCOPO (onde cada variável existe)
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   ESCOPO é a "área de alcance" de uma variável.

   • Variável GLOBAL  -> criada fora de qualquer função.
                         Todo mundo enxerga.
   • Variável LOCAL   -> criada DENTRO da função (com let/const).
                         Só existe ali dentro. Quando a função
                         termina, ela some.
   • PARÂMETRO        -> é uma variável LOCAL que já nasce com
                         valor: o argumento recebido na chamada.

   Metáfora: a função é uma sala de aula. O que está escrito no
   quadro da sala (local) só a turma daquela sala vê. O que está
   no mural do corredor (global) todo mundo vê.
   ============================================================ */

function linha() {
    return "=".repeat(52)
}

// ---------- Variável GLOBAL ----------
let escola = "IFAL Maceió"

function mostrarEscola() {
    // Aqui dentro dá para LER a variável global sem problema.
    return `Estudo no ${escola}`
}

console.log(linha())
console.log("🌍 VARIÁVEL GLOBAL")
console.log(linha())
console.log(`Fora da função: ${escola}`)
console.log(`Dentro da função: ${mostrarEscola()}`)
console.log()

// ---------- Variável LOCAL ----------
function calcularDobro(numero) {
    // "numero" é PARÂMETRO -> variável local que já chega com valor.
    // "dobro" é variável LOCAL -> nasce e morre dentro da função.
    let dobro = numero * 2
    return dobro
}

console.log(linha())
console.log("🏠 VARIÁVEL LOCAL E PARÂMETRO")
console.log(linha())
console.log(`calcularDobro(7) = ${calcularDobro(7)}`)
console.log("Dentro da função existiram 'numero' (= 7) e 'dobro' (= 14).")
console.log("Assim que a função terminou, as duas deixaram de existir.")
console.log()

/* ------------------------------------------------------------
   ⚠️ ERRO CLÁSSICO: USAR VARIÁVEL LOCAL FORA DA FUNÇÃO

   Se a gente escrever, depois da função:

       console.log(dobro)

   o Node interrompe o programa com:

       ReferenceError: dobro is not defined

   Tradução: "não conheço ninguém chamado dobro por aqui".
   A variável existia SÓ dentro de calcularDobro.

   Conserto: fazer a função DEVOLVER o valor com return e guardar
   numa variável de fora — exatamente como está logo abaixo.
   ------------------------------------------------------------ */

let dobroDeSete = calcularDobro(7)   // ✅ jeito certo de trazer o valor para fora
console.log(`Trazendo o valor para fora com return: ${dobroDeSete}`)
console.log()

// ---------- Cada chamada tem o seu próprio conjunto de locais ----------
function contador(quantas) {
    let total = 0
    for (let i = 1; i <= quantas; i++) {
        total = total + i
    }
    return total
}

console.log(linha())
console.log("🔁 CADA CHAMADA TEM AS SUAS PRÓPRIAS VARIÁVEIS")
console.log(linha())
console.log(`contador(3) = ${contador(3)}   (1 + 2 + 3)`)
console.log(`contador(5) = ${contador(5)}  (1 + 2 + 3 + 4 + 5)`)
console.log("O 'total' da primeira chamada não interferiu na segunda.")
console.log("Cada execução cria variáveis novas, do zero.")
console.log()

// ---------- Nome igual dentro e fora: são variáveis DIFERENTES ----------
let nota = 10   // global

function testarNota(nota) {
    // Este "nota" é o PARÂMETRO, uma variável local.
    // Ele ESCONDE a global enquanto a função executa.
    nota = nota + 5
    return nota
}

console.log(linha())
console.log("👯 MESMO NOME, VARIÁVEIS DIFERENTES")
console.log(linha())
console.log(`Antes da chamada, a global nota vale ${nota}`)
console.log(`testarNota(2) devolve ${testarNota(2)}   (2 + 5, usando a LOCAL)`)
console.log(`Depois da chamada, a global nota continua ${nota}`)
console.log("A função mexeu na cópia local. A global não foi tocada.")
console.log()

// ---------- Alterando uma global de dentro (cuidado!) ----------
let contadorDeCliques = 0

function clicar() {
    // Sem let/const na frente, a gente está usando a variável de fora.
    contadorDeCliques = contadorDeCliques + 1
    return contadorDeCliques
}

console.log(linha())
console.log("⚠️ ALTERANDO UMA GLOBAL DE DENTRO DA FUNÇÃO")
console.log(linha())
console.log(`Cliques no início: ${contadorDeCliques}`)
clicar()
clicar()
clicar()
console.log(`Depois de 3 chamadas de clicar(): ${contadorDeCliques}`)
console.log("Funciona, mas evite: quanto mais a função depende de globais,")
console.log("mais difícil fica entender e reaproveitar o código.")
console.log()

console.log(linha())
console.log("📌 REGRA DE OURO")
console.log(linha())
console.log("A função recebe o que precisa por PARÂMETRO")
console.log("e devolve o que produziu por RETURN.")
console.log("Assim ela funciona em qualquer programa, sem depender de fora.")
console.log()
console.log(linha())
console.log("Fim do arquivo 05. Próximo: node 06_exercicios_resolvidos.js")
console.log(linha())

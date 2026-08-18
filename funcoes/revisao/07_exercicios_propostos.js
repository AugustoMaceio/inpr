/* ============================================================
   REVISÃO DE FUNÇÕES — 07: EXERCÍCIOS PROPOSTOS (P1 a P8)
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   COMO USAR ESTE ARQUIVO:
   1. Leia o enunciado de cada exercício.
   2. Escreva o corpo da função no lugar do // TODO.
   3. DESCOMENTE o bloco de testes daquele exercício
      (apague a linha que abre o comentário e a que fecha o comentário).
   4. Rode: node 07_exercicios_propostos.js
   5. Confira se a saída bate com o resultado esperado do comentário.

   Do jeito que o arquivo está agora, ele roda sem erro e só mostra
   o checklist. Vá descomentando conforme for resolvendo.
   ============================================================ */

function linha() {
    return "=".repeat(52)
}

console.log(linha())
console.log("📝 EXERCÍCIOS PROPOSTOS — P1 a P8")
console.log(linha())
console.log("Resolva cada função e descomente o bloco de testes correspondente.")
console.log()

/* ------------------------------------------------------------
   P1) triplo(n)
   Receba um número e devolva o triplo dele.
   Esperado: triplo(4) -> 12 | triplo(0) -> 0 | triplo(-2) -> -6
   ------------------------------------------------------------ */
function triplo(n) {
    // TODO: escreva aqui
}

/* --- TESTES DE P1 (descomente quando resolver) ---
console.log(linha())
console.log("P1 — triplo(n)")
console.log(linha())
console.log(`triplo(4) = ${triplo(4)}`)
console.log(`triplo(0) = ${triplo(0)}`)
console.log(`triplo(-2) = ${triplo(-2)}`)
console.log()
--- fim dos testes de P1 --- */

/* ------------------------------------------------------------
   P2) areaRetangulo(base, altura) e perimetroRetangulo(base, altura)
   Área = base * altura
   Perímetro = 2 * (base + altura)
   Esperado: areaRetangulo(5, 3) -> 15 | perimetroRetangulo(5, 3) -> 16
   ------------------------------------------------------------ */
function areaRetangulo(base, altura) {
    // TODO: escreva aqui
}

function perimetroRetangulo(base, altura) {
    // TODO: escreva aqui
}

/* --- TESTES DE P2 (descomente quando resolver) ---
console.log(linha())
console.log("P2 — retângulo")
console.log(linha())
console.log(`areaRetangulo(5, 3) = ${areaRetangulo(5, 3)}`)
console.log(`perimetroRetangulo(5, 3) = ${perimetroRetangulo(5, 3)}`)
console.log(`areaRetangulo(10, 10) = ${areaRetangulo(10, 10)}`)
console.log(`perimetroRetangulo(10, 10) = ${perimetroRetangulo(10, 10)}`)
console.log()
--- fim dos testes de P2 --- */

/* ------------------------------------------------------------
   P3) areaTriangulo(base, altura)
   Área = base * altura / 2
   Esperado: areaTriangulo(6, 4) -> 12 | areaTriangulo(7, 3) -> 10.5
   ------------------------------------------------------------ */
function areaTriangulo(base, altura) {
    // TODO: escreva aqui
}

/* --- TESTES DE P3 (descomente quando resolver) ---
console.log(linha())
console.log("P3 — areaTriangulo(base, altura)")
console.log(linha())
console.log(`areaTriangulo(6, 4) = ${areaTriangulo(6, 4)}`)
console.log(`areaTriangulo(7, 3) = ${areaTriangulo(7, 3)}`)
console.log()
--- fim dos testes de P3 --- */

/* ------------------------------------------------------------
   P4) converterMoeda(reais, cotacao)
   Devolva quantos dólares (ou euros) valem os reais informados.
   Dica: é uma divisão -> reais / cotacao
   Esperado: converterMoeda(100, 5) -> 20
   ------------------------------------------------------------ */
function converterMoeda(reais, cotacao) {
    // TODO: escreva aqui
}

/* --- TESTES DE P4 (descomente quando resolver) ---
console.log(linha())
console.log("P4 — converterMoeda(reais, cotacao)")
console.log(linha())
console.log(`R$ 100,00 com cotação 5,00 = ${converterMoeda(100, 5)}`)
console.log(`R$ 250,00 com cotação 5,50 = ${converterMoeda(250, 5.5)}`)
console.log("⚠️ Atenção à ordem: converterMoeda(5, 100) daria outro resultado!")
console.log()
--- fim dos testes de P4 --- */

/* ------------------------------------------------------------
   P5) menorDeTres(a, b, c)
   Devolva o menor entre três números.
   Dica: comece guardando a como menor e vá comparando com if.
   Esperado: menorDeTres(4, 9, 2) -> 2 | menorDeTres(7, 7, 7) -> 7
   ------------------------------------------------------------ */
function menorDeTres(a, b, c) {
    // TODO: escreva aqui
}

/* --- TESTES DE P5 (descomente quando resolver) ---
console.log(linha())
console.log("P5 — menorDeTres(a, b, c)")
console.log(linha())
console.log(`menorDeTres(4, 9, 2) = ${menorDeTres(4, 9, 2)}`)
console.log(`menorDeTres(10, 3, 8) = ${menorDeTres(10, 3, 8)}`)
console.log(`menorDeTres(7, 7, 7) = ${menorDeTres(7, 7, 7)}`)
console.log(`menorDeTres(-1, 0, 5) = ${menorDeTres(-1, 0, 5)}`)
console.log()
--- fim dos testes de P5 --- */

/* ------------------------------------------------------------
   P6) souMaiorDeIdade(idade)
   Devolva um TEXTO: "✅ Maior de idade" se idade >= 18,
   senão "🚸 Menor de idade".
   Esperado: souMaiorDeIdade(18) -> "✅ Maior de idade"
   ------------------------------------------------------------ */
function souMaiorDeIdade(idade) {
    // TODO: escreva aqui
}

/* --- TESTES DE P6 (descomente quando resolver) ---
console.log(linha())
console.log("P6 — souMaiorDeIdade(idade)")
console.log(linha())
console.log(`15 anos -> ${souMaiorDeIdade(15)}`)
console.log(`17 anos -> ${souMaiorDeIdade(17)}`)
console.log(`18 anos -> ${souMaiorDeIdade(18)}   (atenção ao limite!)`)
console.log(`30 anos -> ${souMaiorDeIdade(30)}`)
console.log()
--- fim dos testes de P6 --- */

/* ------------------------------------------------------------
   P7) fahrenheitParaCelsius(f)
   Fórmula: C = (F - 32) * 5 / 9
   Esperado: fahrenheitParaCelsius(212) -> 100 | (32) -> 0
   ------------------------------------------------------------ */
function fahrenheitParaCelsius(f) {
    // TODO: escreva aqui
}

/* --- TESTES DE P7 (descomente quando resolver) ---
console.log(linha())
console.log("P7 — fahrenheitParaCelsius(f)")
console.log(linha())
console.log(`212 °F = ${fahrenheitParaCelsius(212)} °C`)
console.log(`32 °F  = ${fahrenheitParaCelsius(32)} °C`)
console.log(`98.6 °F = ${fahrenheitParaCelsius(98.6).toFixed(1)} °C`)
console.log()
--- fim dos testes de P7 --- */

/* ------------------------------------------------------------
   P8) contarRegressiva(n)
   IMPRIMA a contagem de n até 1 e depois "🚀 Decolar!".
   Esta função NÃO tem return — ela só imprime (use for).
   Esperado para contarRegressiva(5):
       5 / 4 / 3 / 2 / 1 / 🚀 Decolar!
   ------------------------------------------------------------ */
function contarRegressiva(n) {
    // TODO: escreva aqui (use um for que vá diminuindo: i--)
}

/* --- TESTES DE P8 (descomente quando resolver) ---
console.log(linha())
console.log("P8 — contarRegressiva(n)")
console.log(linha())
contarRegressiva(5)
console.log()
contarRegressiva(3)
console.log()
--- fim dos testes de P8 --- */

/* ------------------------------------------------------------
   DESAFIO EXTRA (opcional) — com entrada do usuário
   O pacote prompt-sync já está instalado na raiz do repositório.
   Descomente as linhas abaixo para pedir um número ao usuário.
   ------------------------------------------------------------

const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número: "))
console.log(`O triplo de ${numero} é ${triplo(numero)}`)

   ------------------------------------------------------------ */

console.log(linha())
console.log("✔️ CHECKLIST — marque no caderno o que já resolveu")
console.log(linha())
console.log("[ ] P1 triplo(n)")
console.log("[ ] P2 areaRetangulo / perimetroRetangulo")
console.log("[ ] P3 areaTriangulo(base, altura)")
console.log("[ ] P4 converterMoeda(reais, cotacao)")
console.log("[ ] P5 menorDeTres(a, b, c)")
console.log("[ ] P6 souMaiorDeIdade(idade)")
console.log("[ ] P7 fahrenheitParaCelsius(f)")
console.log("[ ] P8 contarRegressiva(n)")
console.log()
console.log("💡 Dica: resolva um por vez, descomente o teste e rode.")
console.log("   Errar e corrigir faz parte — é assim que se aprende a programar.")
console.log(linha())

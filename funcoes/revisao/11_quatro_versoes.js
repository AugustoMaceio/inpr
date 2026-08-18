/* ============================================================
   REVISÃO DE FUNÇÕES — 11: A MESMA FUNÇÃO EM 4 VERSÕES
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   ⭐ ESTE É O ARQUIVO MAIS IMPORTANTE DA REVISÃO.

   Problema: calcular a área de um quadrado.
   Quatro maneiras de escrever a MESMA ideia, da mais rígida
   até a versão profissional. Compare as quatro na mesma tela.
   ============================================================ */

function linha() {
    return "=".repeat(56)
}

/* ------------------------------------------------------------
   v1 — SEM parâmetro, valor FIXO dentro da função.
   Funciona... para um único quadrado, de lado 5.
   Se o lado mudar, é preciso reescrever a função.
   ------------------------------------------------------------ */
function areaDoQuadrado1() {
    return 5 * 5
}

/* ------------------------------------------------------------
   v2 — COM parâmetro: agora serve para QUALQUER lado.
   Uma única função resolve infinitos quadrados.
   ------------------------------------------------------------ */
function areaDoQuadrado2(lado) {
    return lado * lado
}

/* ------------------------------------------------------------
   v3 — COM parâmetro, mas SEM return: só imprime.
   Mostra o valor na tela, porém ninguém consegue pegar esse
   valor para usar depois. Devolve undefined.
   ------------------------------------------------------------ */
function areaDoQuadrado3(lado) {
    console.log(lado * lado)
}

/* ------------------------------------------------------------
   v4 — COM parâmetro E com return: a versão profissional.
   Aceita entrada, devolve valor e pode ser ENCADEADA com
   outra função.
   ------------------------------------------------------------ */
function areaDoQuadrado4(lado) {
    return lado * lado
}

// Função companheira, que recebe o RETORNO da v4.
function classificarArea(area) {
    return area > 100 ? "GRANDE" : "PEQUENA"
}

console.log(linha())
console.log("⬜ A MESMA FUNÇÃO EM 4 VERSÕES — área do quadrado")
console.log(linha())
console.log()

console.log("-".repeat(56))
console.log("v1 — sem parâmetro, valor fixo")
console.log("-".repeat(56))
console.log(`areaDoQuadrado1() = ${areaDoQuadrado1()}`)
console.log("E se o lado for 7? A função não sabe fazer. Ela só conhece o 5.")
console.log("👉 Rígida: resolve um caso só.")
console.log()

console.log("-".repeat(56))
console.log("v2 — com parâmetro")
console.log("-".repeat(56))
console.log(`areaDoQuadrado2(5) = ${areaDoQuadrado2(5)}`)
console.log(`areaDoQuadrado2(7) = ${areaDoQuadrado2(7)}`)
console.log(`areaDoQuadrado2(12) = ${areaDoQuadrado2(12)}`)
console.log(`areaDoQuadrado2(0.5) = ${areaDoQuadrado2(0.5)}`)
console.log("👉 Flexível: a mesma função resolve infinitos quadrados.")
console.log()

console.log("-".repeat(56))
console.log("v3 — com parâmetro, sem return (só imprime)")
console.log("-".repeat(56))
console.log("Chamando areaDoQuadrado3(12) — ela imprime sozinha:")
areaDoQuadrado3(12)

// Tentando guardar o resultado dessa versão:
let tentativa = areaDoQuadrado3(12)   // imprime 144 de novo
console.log(`E o que ela DEVOLVEU? ${tentativa}`)
console.log(`Tentando usar esse valor: ${tentativa} + 10 = ${tentativa + 10}`)
console.log("👉 Aparece na tela, mas o valor não pode ser reaproveitado.")
console.log()

console.log("-".repeat(56))
console.log("v4 — com parâmetro e com return (encadeável)")
console.log("-".repeat(56))
console.log(`areaDoQuadrado4(12) = ${areaDoQuadrado4(12)}`)
console.log(`Guardando: let a = areaDoQuadrado4(12) -> a * 2 = ${areaDoQuadrado4(12) * 2}`)
console.log(`Encadeando: classificarArea(areaDoQuadrado4(12)) -> ${classificarArea(areaDoQuadrado4(12))}`)
console.log(`Encadeando: classificarArea(areaDoQuadrado4(5))  -> ${classificarArea(areaDoQuadrado4(5))}`)
console.log("👉 Completa: recebe entrada, devolve valor e conversa com outras funções.")
console.log()

/* ------------------------------------------------------------
   TABELA COMPARATIVA
   ------------------------------------------------------------ */

console.log(linha())
console.log("📊 TABELA COMPARATIVA DAS QUATRO VERSÕES")
console.log(linha())

// padEnd completa o texto com espaços até o tamanho pedido,
// deixando as colunas alinhadas no terminal.
function celula(texto, tamanho) {
    return String(texto).padEnd(tamanho)
}

console.log(
    celula("Versão", 9) +
    celula("Reutilizável?", 15) +
    celula("Aceita entrada?", 17) +
    celula("Devolve valor?", 16) +
    celula("Encadeável?", 12)
)
console.log("-".repeat(69))
console.log(
    celula("v1", 9) + celula("não", 15) + celula("não", 17) + celula("sim", 16) + celula("quase nunca", 12)
)
console.log(
    celula("v2", 9) + celula("sim", 15) + celula("sim", 17) + celula("sim", 16) + celula("sim", 12)
)
console.log(
    celula("v3", 9) + celula("sim", 15) + celula("sim", 17) + celula("não (undefined)", 16) + celula("não", 12)
)
console.log(
    celula("v4", 9) + celula("sim", 15) + celula("sim", 17) + celula("sim", 16) + celula("sim", 12)
)
console.log("-".repeat(69))
console.log()
console.log("Em resumo: ❌ v1 rígida · ✅ v2 flexível · ⚠️ v3 imprime e perde o valor · ⭐ v4 completa")
console.log()

console.log(linha())
console.log("📌 O QUE LEVAR DESTE ARQUIVO")
console.log(linha())
console.log("• v1 funciona, mas serve para um caso só -> pouco útil.")
console.log("• v2 e v4 são iguais em código: o que muda é COMO a gente usa.")
console.log("• v3 é a armadilha mais comum: parece certa na tela,")
console.log("  mas o valor se perde — não dá para somar, comparar nem encadear.")
console.log("• Escreva sempre no estilo v4: parâmetro na entrada, return na saída.")
console.log("  Quem chama decide se vai imprimir, guardar ou passar adiante.")
console.log(linha())

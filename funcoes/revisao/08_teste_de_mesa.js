/* ============================================================
   REVISÃO DE FUNÇÕES — 08: TESTE DE MESA (T1 a T10)
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Teste de mesa é rastrear a execução do programa LINHA A LINHA,
   anotando numa tabela o valor de cada variável e o que a função
   devolve — usando só papel, caneta e cabeça.

   Este arquivo é o GABARITO EXECUTÁVEL: a resposta certa é a
   própria saída do programa. Por isso, só rode depois de ter
   preenchido a tabela no caderno.
   ============================================================ */

function linha() {
    return "=".repeat(52)
}

console.log()
console.log("*".repeat(56))
console.log("⚠️  Preencha a tabela no CADERNO antes de rodar este arquivo!")
console.log("*".repeat(56))
console.log()
console.log("Se você já preencheu, confira cada resposta abaixo.")
console.log("Errou algum? Refaça o teste de mesa daquele caso até entender.")
console.log()

/* ------------------------------------------------------------
   T1 — Tabela: chamada | x | retorno
   ------------------------------------------------------------ */
function f(x) {
    return x + 3
}

console.log(linha())
console.log("T1 — function f(x) { return x + 3 }")
console.log(linha())
console.log("console.log(f(4))    ->", f(4))
console.log("console.log(f(f(1))) ->", f(f(1)))
console.log()

/* ------------------------------------------------------------
   T2 — Tabela: n (dentro) | valor (fora) | retorno
   ------------------------------------------------------------ */
function dobrar(n) {
    n = n * 2
    return n
}

let valor = 5

console.log(linha())
console.log("T2 — dobrar(n) altera n dentro da função")
console.log(linha())
console.log("console.log(dobrar(valor)) ->", dobrar(valor))
console.log("console.log(valor)         ->", valor)
console.log()

/* ------------------------------------------------------------
   T3 — Tabela: a | b | o que é impresso | o que r recebe
   ------------------------------------------------------------ */
function soma(a, b) {
    console.log(a + b)
}

console.log(linha())
console.log("T3 — soma(a, b) sem return")
console.log(linha())
console.log("A linha abaixo é impressa por dentro da função:")
let r = soma(2, 3)
console.log("console.log(r) ->", r)
console.log()

/* ------------------------------------------------------------
   T4 — Tabela: dia | mes | qual if foi verdadeiro | retorno
   ------------------------------------------------------------ */
function estacao(dia, mes) {
    if ((mes == 9 && dia > 21) || mes == 10 || mes == 11 || (mes == 12 && dia < 21))
        return "💐 PRIMAVERA"
    if ((mes == 12 && dia >= 21) || mes == 1 || mes == 2 || (mes == 3 && dia < 20))
        return "☀️ VERÃO"
    if ((mes == 3 && dia >= 20) || mes == 4 || mes == 5 || (mes == 6 && dia < 21))
        return "🍂 OUTONO"
    if ((mes == 6 && dia >= 21) || mes == 7 || mes == 8 || (mes == 9 && dia <= 21))
        return "☂️ INVERNO"
}

console.log(linha())
console.log("T4 — estacao(dia, mes) e a ordem dos argumentos")
console.log(linha())
console.log("console.log(estacao(25, 12)) ->", estacao(25, 12))
console.log("console.log(estacao(12, 25)) ->", estacao(12, 25))
console.log()

/* ------------------------------------------------------------
   T5 — Tabela: i | total (uma linha por volta do for)
   ------------------------------------------------------------ */
function misterio(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total = total + i
    }
    return total
}

console.log(linha())
console.log("T5 — misterio(n) com acumulador dentro do for")
console.log(linha())
console.log("console.log(misterio(4)) ->", misterio(4))
console.log()

/* ------------------------------------------------------------
   T6 — Tabela: a | b | retorno
   ------------------------------------------------------------ */
function troca(a, b) {
    return b + " " + a
}

console.log(linha())
console.log('T6 — troca(a, b) { return b + " " + a }')
console.log(linha())
console.log('console.log(troca("mundo", "Olá")) ->', troca("mundo", "Olá"))
console.log()

/* ------------------------------------------------------------
   T7 — Tabela: vitorias | empates | retorno
   ------------------------------------------------------------ */
function pontos(vitorias, empates) {
    return vitorias * 3 + empates
}

console.log(linha())
console.log("T7 — pontos(vitorias, empates)")
console.log(linha())
console.log("console.log(pontos(4, 2)) ->", pontos(4, 2))
console.log("console.log(pontos(2, 4)) ->", pontos(2, 4))
console.log()

/* ------------------------------------------------------------
   T8 — Tabela: i | saida (uma linha por volta do for)
   ------------------------------------------------------------ */
function contar(n) {
    let saida = ""
    for (let i = n; i >= 1; i--) {
        saida = saida + i + " "
    }
    return saida
}

console.log(linha())
console.log("T8 — contar(n) montando um texto dentro do for")
console.log(linha())
console.log("console.log(contar(5)) ->", contar(5))
console.log("(repare no espaço no final do texto)")
console.log()

/* ------------------------------------------------------------
   T9 — Tabela: p | qual if foi verdadeiro | retorno
        Atenção aos LIMITES de cada faixa!
   ------------------------------------------------------------ */
function bateria(p) {
    if (p >= 80) return "CHEIA"
    if (p >= 40) return "BOA"
    if (p >= 20) return "BAIXA"
    return "CRÍTICA"
}

console.log(linha())
console.log("T9 — bateria(p) e os limites das faixas")
console.log(linha())
console.log("console.log(bateria(80)) ->", bateria(80))
console.log("console.log(bateria(39)) ->", bateria(39))
console.log("console.log(bateria(19)) ->", bateria(19))
console.log()

/* ------------------------------------------------------------
   T10 — Tabela: a | b | tipo dos valores | retorno
   ------------------------------------------------------------ */
function somar(a, b) {
    return a + b
}

console.log(linha())
console.log("T10 — somar(a, b) com número, texto e argumento faltando")
console.log(linha())
console.log('console.log(somar(2, 3))   ->', somar(2, 3))
console.log('console.log(somar("2", 3)) ->', somar("2", 3))
console.log('console.log(somar(5))      ->', somar(5))
console.log()

console.log(linha())
console.log("📌 CONFERIU TUDO?")
console.log(linha())
console.log("Cada resposta que você errou aponta um conceito para revisar:")
console.log("• T1 e T7 -> ordem e uso dos argumentos")
console.log("• T2 e T5 -> escopo e variáveis locais")
console.log("• T3      -> função sem return devolve undefined")
console.log("• T4      -> a ordem dos argumentos muda o resultado")
console.log("• T6      -> a posição dos parâmetros dentro do return")
console.log("• T8      -> acumulador de texto dentro do for")
console.log("• T9      -> limites (>=) nas condições")
console.log("• T10     -> tipos: número + texto vira texto (concatenação)")
console.log(linha())

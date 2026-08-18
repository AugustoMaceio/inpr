/* ============================================================
   REVISÃO DE FUNÇÕES — 06: EXERCÍCIOS RESOLVIDOS (R1 a R5)
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Leia o enunciado, tente resolver no caderno e SÓ DEPOIS
   compare com a solução comentada.
   ============================================================ */

function linha() {
    return "=".repeat(52)
}

/* ------------------------------------------------------------
   R1) Escreva a função dobro(n) que recebe um número e devolve
       o dobro desse número.
   ------------------------------------------------------------ */

// Passo 1: a função precisa de um valor vindo de fora -> um parâmetro (n).
// Passo 2: o processamento é uma multiplicação por 2.
// Passo 3: o resultado precisa VOLTAR para quem chamou -> return.
function dobro(n) {
    return n * 2
}

console.log(linha())
console.log("R1 — dobro(n)")
console.log(linha())
console.log(`dobro(5) = ${dobro(5)}`)
console.log(`dobro(0) = ${dobro(0)}`)
console.log(`dobro(-3) = ${dobro(-3)}`)
console.log(`dobro(2.5) = ${dobro(2.5)}`)
console.log(`dobro(dobro(3)) = ${dobro(dobro(3))}   (o dobro do dobro de 3)`)
console.log()

/* ------------------------------------------------------------
   R2) Escreva a função maiorDeDois(a, b) que devolve o maior
       entre dois números.
   ------------------------------------------------------------ */

// Passo 1: dois valores de fora -> dois parâmetros (a e b).
// Passo 2: comparar com if. Se a for maior, o resultado é a.
// Passo 3: senão, o resultado é b.
//          (Se forem iguais, cai no else e devolve b — que é o
//           mesmo valor de a, então está certo do mesmo jeito.)
function maiorDeDois(a, b) {
    if (a > b)
        return a
    else
        return b
}

console.log(linha())
console.log("R2 — maiorDeDois(a, b)")
console.log(linha())
console.log(`maiorDeDois(8, 3) = ${maiorDeDois(8, 3)}`)
console.log(`maiorDeDois(3, 8) = ${maiorDeDois(3, 8)}   (ordem trocada, mesma resposta)`)
console.log(`maiorDeDois(5, 5) = ${maiorDeDois(5, 5)}   (empate)`)
console.log(`maiorDeDois(-2, -9) = ${maiorDeDois(-2, -9)}   (cuidado com negativos!)`)
console.log()

/* ------------------------------------------------------------
   R3) Escreva a função boasVindas(), SEM parâmetro, que devolve
       o cabeçalho da turma em 3 linhas.
   ------------------------------------------------------------ */

// Passo 1: nada vem de fora -> parênteses vazios.
// Passo 2: montar o texto com template string (crase).
// Passo 3: o \n faz o texto pular de linha.
function boasVindas() {
    return `IFAL — Campus Maceió\nINPR — Introdução à Programação\nTurma 911C — Prof. Augusto`
}

console.log(linha())
console.log("R3 — boasVindas()")
console.log(linha())
console.log(boasVindas())
console.log()

/* ------------------------------------------------------------
   R4) Escreva mediaFinal(n1, n2) que devolve a média de duas
       notas, e situacao(media) que classifica:
       média >= 6 -> aprovado; >= 4 -> recuperação; senão reprovado.
       Depois mostre o ENCADEAMENTO situacao(mediaFinal(7, 5)).
   ------------------------------------------------------------ */

// Passo 1: a média de duas notas é (n1 + n2) / 2.
//          Os parênteses são obrigatórios: sem eles o JavaScript
//          dividiria só n2 por 2, por causa da precedência.
function mediaFinal(n1, n2) {
    return (n1 + n2) / 2
}

// Passo 2: a classificação recebe a média JÁ CALCULADA.
//          Repare que ela não sabe nada de notas — só de média.
//          Cada função faz uma coisa só.
function situacao(media) {
    if (media >= 6)
        return "✅ APROVADO"
    else if (media >= 4)
        return "🟡 RECUPERAÇÃO"
    else
        return "❌ REPROVADO"
}

console.log(linha())
console.log("R4 — mediaFinal(n1, n2) + situacao(media)")
console.log(linha())

// Primeiro em duas etapas, para ficar claro:
let m = mediaFinal(7, 5)
console.log(`mediaFinal(7, 5) devolve ${m}`)
console.log(`situacao(${m}) devolve ${situacao(m)}`)

// Agora encadeado: o return de mediaFinal vira o argumento de situacao.
console.log(`Encadeado: situacao(mediaFinal(7, 5)) -> ${situacao(mediaFinal(7, 5))}`)
console.log()
console.log("Mais alunos:")
console.log(`Ana (9 e 8):    média ${mediaFinal(9, 8)} -> ${situacao(mediaFinal(9, 8))}`)
console.log(`Bruno (5 e 4):  média ${mediaFinal(5, 4)} -> ${situacao(mediaFinal(5, 4))}`)
console.log(`Carla (2 e 3):  média ${mediaFinal(2, 3)} -> ${situacao(mediaFinal(2, 3))}`)
console.log(`Diego (6 e 6):  média ${mediaFinal(6, 6)} -> ${situacao(mediaFinal(6, 6))}`)
console.log()

/* ------------------------------------------------------------
   R5) Escreva tabuada(n) que IMPRIME as 10 linhas da tabuada.
       Esta função NÃO tem return — serve para mostrar a diferença
       entre return e console.log.
   ------------------------------------------------------------ */

// Passo 1: um parâmetro (n) = a tabuada desejada.
// Passo 2: um for de 1 a 10.
// Passo 3: dentro do for, imprimir cada linha.
//          Não há return: a missão da função é MOSTRAR, não devolver.
function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

console.log(linha())
console.log("R5 — tabuada(n)")
console.log(linha())
console.log("Tabuada do 7:")
tabuada(7)
console.log()
console.log("Tabuada do 3:")
tabuada(3)
console.log()

// E o que essa função devolve? Nada. Ou seja: undefined.
let retornoDaTabuada = tabuada(1)
console.log()
console.log(`O que tabuada(1) devolveu? ${retornoDaTabuada}`)
console.log("Como não existe return, o valor devolvido é undefined.")
console.log("Isso está CERTO aqui: a função foi feita para imprimir, não para devolver.")
console.log()

console.log(linha())
console.log("Fim do arquivo 06. Agora é a sua vez: node 07_exercicios_propostos.js")
console.log(linha())

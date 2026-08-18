/* ============================================================
   REVISÃO DE FUNÇÕES — 13: GALERIA DE ERROS (errado × certo)
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Os 8 erros que mais aparecem nas aulas. Aqui eles acontecem
   DE VERDADE, na sua frente — e logo em seguida vem o conserto.

   Os erros que só produzem um valor estranho (undefined, NaN,
   [Function: ...], "23") são executados normalmente.
   Os erros que INTERROMPEM o programa (ReferenceError) estão
   dentro de try/catch: assim o Node mostra a mensagem do erro
   e o arquivo continua rodando até o fim.
   ============================================================ */

function titulo(numero, texto) {
    return `\n${"=".repeat(56)}\nERRO ${numero} — ${texto}\n${"=".repeat(56)}`
}

console.log("=".repeat(56))
console.log("🐞 GALERIA DE ERROS CLÁSSICOS COM FUNÇÕES")
console.log("=".repeat(56))

/* ------------------------------------------------------------
   ERRO 1 — Esquecer o return
   ------------------------------------------------------------ */
console.log(titulo(1, "esquecer o return"))

// ❌ ERRADO: calcula, mas não devolve nada.
function dobroErrado(n) {
    n * 2
}

// ✅ CERTO
function dobroCerto(n) {
    return n * 2
}

console.log(`❌ dobroErrado(5) -> ${dobroErrado(5)}`)
console.log(`✅ dobroCerto(5)  -> ${dobroCerto(5)}`)
console.log("Por quê? Sem return, a função termina sem devolver valor -> undefined.")
console.log("Conserto: colocar return na frente da expressão.")

/* ------------------------------------------------------------
   ERRO 2 — Chamar a função sem os parênteses
   ------------------------------------------------------------ */
console.log(titulo(2, "chamar sem os parênteses"))

function ifal() {
    return "Instituto Federal de Alagoas"
}

console.log("❌ console.log(ifal)   ->")
console.log(ifal)   // imprime a própria função: [Function: ifal]
console.log("✅ console.log(ifal()) ->", ifal())
console.log("Por quê? Sem ( ) você fala do NOME da função, não do resultado.")
console.log("Conserto: sempre ifal() quando quiser o valor.")

/* ------------------------------------------------------------
   ERRO 3 — Ordem trocada dos argumentos
   ------------------------------------------------------------ */
console.log(titulo(3, "ordem trocada dos argumentos"))

function dividirConta(total, pessoas) {
    return total / pessoas
}

console.log(`❌ dividirConta(4, 200) -> R$ ${dividirConta(4, 200).toFixed(2)} por pessoa (?!)`)
console.log(`✅ dividirConta(200, 4) -> R$ ${dividirConta(200, 4).toFixed(2)} por pessoa`)
console.log("Por quê? O 1º argumento entra no 1º parâmetro, sempre.")
console.log("Conserto: conferir a ORDEM na definição antes de chamar.")
console.log("⚠️ Este erro não trava o programa — ele só devolve resposta errada.")

/* ------------------------------------------------------------
   ERRO 4 — Faltando argumento
   ------------------------------------------------------------ */
console.log(titulo(4, "faltando argumento"))

function somar(a, b) {
    return a + b
}

console.log(`❌ somar(5)    -> ${somar(5)}`)
console.log(`✅ somar(5, 0) -> ${somar(5, 0)}`)
console.log("Por quê? b não recebeu valor, então b vale undefined.")
console.log("5 + undefined não é uma conta possível -> NaN (Not a Number).")
console.log("Conserto: passar todos os argumentos que a função pede.")

/* ------------------------------------------------------------
   ERRO 5 — Argumento sobrando
   ------------------------------------------------------------ */
console.log(titulo(5, "argumento sobrando"))

console.log(`⚠️ somar(1, 2, 100) -> ${somar(1, 2, 100)}   (cadê o 100?)`)
console.log(`✅ somar(1, 2)      -> ${somar(1, 2)}`)
console.log("Por quê? A função só tem dois parâmetros (a e b).")
console.log("O terceiro valor é simplesmente IGNORADO, sem aviso nenhum.")
console.log("Conserto: se precisa de três valores, declare três parâmetros.")

/* ------------------------------------------------------------
   ERRO 6 — Usar variável local fora da função
   ------------------------------------------------------------ */
console.log(titulo(6, "usar variável local fora da função"))

function calcular(n) {
    let resultado = n * 10
    return resultado
}

calcular(5)

// ❌ ERRADO: "resultado" só existe dentro da função.
// Colocamos dentro de try/catch para o programa não parar aqui.
try {
    console.log("❌ console.log(resultado) ->")
    console.log(resultado)
} catch (erro) {
    console.log(`   ${erro.name}: ${erro.message}`)
}

// ✅ CERTO: trazer o valor para fora usando o return.
let resultadoCerto = calcular(5)
console.log(`✅ let resultadoCerto = calcular(5) -> ${resultadoCerto}`)
console.log("Por quê? Variável criada com let dentro da função é LOCAL.")
console.log("Conserto: devolver o valor com return e guardar numa variável de fora.")

/* ------------------------------------------------------------
   ERRO 7 — Nome do parâmetro diferente do nome usado no corpo
   ------------------------------------------------------------ */
console.log(titulo(7, "nome do parâmetro ≠ nome usado no corpo"))

// ❌ ERRADO: o parâmetro se chama "raio", mas o corpo usa "r".
function areaErrada(raio) {
    return Math.PI * r ** 2
}

// ✅ CERTO: mesmo nome na definição e no corpo.
function areaCerta(raio) {
    return Math.PI * raio ** 2
}

try {
    console.log("❌ areaErrada(3) ->")
    console.log(areaErrada(3))
} catch (erro) {
    console.log(`   ${erro.name}: ${erro.message}`)
}
console.log(`✅ areaCerta(3) -> ${areaCerta(3).toFixed(2)}`)
console.log("Por quê? Não existe nenhuma variável chamada r no programa.")
console.log("Conserto: usar exatamente o mesmo nome do parâmetro dentro da função.")

/* ------------------------------------------------------------
   ERRO 8 — Texto onde se esperava número
   ------------------------------------------------------------ */
console.log(titulo(8, "texto onde se esperava número"))

console.log(`❌ somar("2", 3)         -> ${somar("2", 3)}   (é o texto "23"!)`)
console.log(`✅ somar(2, 3)           -> ${somar(2, 3)}`)
console.log(`✅ somar(Number("2"), 3) -> ${somar(Number("2"), 3)}`)
console.log(`Tipo de somar("2", 3): ${typeof somar("2", 3)}`)
console.log(`Tipo de somar(2, 3):   ${typeof somar(2, 3)}`)
console.log("Por quê? Com texto, o sinal + CONCATENA em vez de somar.")
console.log("Isso acontece muito com prompt(), que sempre devolve TEXTO.")
console.log('Conserto: Number(prompt("...")) ou parseFloat(prompt("..."))')

console.log()
console.log("=".repeat(56))
console.log("📌 RESUMO DA GALERIA")
console.log("=".repeat(56))
console.log("1. Sem return          -> undefined")
console.log("2. Sem parênteses      -> [Function: ifal]")
console.log("3. Ordem trocada       -> resposta errada, sem aviso")
console.log("4. Falta argumento     -> NaN")
console.log("5. Argumento sobrando  -> ignorado silenciosamente")
console.log("6. Local usada fora    -> ReferenceError")
console.log("7. Nome errado no corpo-> ReferenceError")
console.log("8. Texto em vez de nº  -> concatenação (\"23\")")
console.log()
console.log("Os erros 3, 4, 5 e 8 são os mais perigosos:")
console.log("o programa NÃO trava, apenas responde errado.")
console.log("Por isso o teste de mesa existe. 👉 node 08_teste_de_mesa.js")
console.log("=".repeat(56))

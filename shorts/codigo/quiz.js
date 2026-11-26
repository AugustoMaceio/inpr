const perguntas = [
  { texto: 'Qual palavra declara uma função?', opcoes: ['var', 'function', 'loop'], certa: 1 },
  { texto: 'Qual laço repete enquanto a condição é verdadeira?', opcoes: ['while', 'if', 'return'], certa: 0 },
]

function corrigir(respostas) {
  let acertos = 0
  for (let i = 0; i < perguntas.length; i++) {
    if (respostas[i] === perguntas[i].certa) acertos++
  }
  return acertos
}

const respostas = [1, 0]
const total = corrigir(respostas)
console.log(`Você acertou ${total} de ${perguntas.length}`)

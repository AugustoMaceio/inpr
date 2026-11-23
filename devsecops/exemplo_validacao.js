function validarIdade(valor) {
  const idade = Number(valor)
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    throw new Error('Idade inválida')
  }
  return idade
}

function escaparHtml(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

console.log(validarIdade('25'))
console.log(escaparHtml('<script>alert(1)</script>'))

try {
  validarIdade('abc')
} catch (erro) {
  console.log('Bloqueado:', erro.message)
}

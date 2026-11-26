function calcular(a, operador, b) {
  switch (operador) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/':
      if (b === 0) throw new Error('Divisão por zero')
      return a / b
    default:
      throw new Error('Operador inválido')
  }
}

console.log(calcular(10, '+', 5))
console.log(calcular(10, '/', 4))
try {
  calcular(1, '/', 0)
} catch (erro) {
  console.log('Erro:', erro.message)
}

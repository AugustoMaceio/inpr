# Aula de JavaScript: Definição e Chamada de Funções

Este README apresenta os conceitos de definição e chamada de funções em JavaScript com base nos exercícios da pasta `funcoes`.

## Objetivos

- Entender o que é uma função em JavaScript
- Aprender a definir funções com parâmetros e retorno
- Usar funções para organizar e reutilizar código
- Chamar funções usando argumentos
- Ver exemplos simples e exercícios práticos

## Conceitos principais

### O que é uma função?
Uma função é um bloco de código nomeado que pode receber valores de entrada (parâmetros), executar operações e retornar um valor.

### Estrutura básica

```js
function nomeDaFuncao(param1, param2) {
  // corpo da função
  return resultado
}
```

### Chamada de função

```js
const valor = nomeDaFuncao(10, 20)
console.log(valor)
```

### Parâmetros e argumentos
- parâmetros: nomes usados na definição da função
- argumentos: valores enviados quando a função é chamada

### `return`
- `return` encerra a função e devolve um valor
- se não houver `return`, a função retorna `undefined`

## Exercícios na pasta `funcoes`

### `exemplo1_funcao.js`
- Define várias funções simples:
  - `f(x)` retorna `x + 3`
  - `media(n1, n2, n3, n4)` calcula a média de quatro valores
  - `saudar(nome)` retorna uma saudação personalizada
  - `ifal()` retorna uma string fixa
- Chama cada função usando `console.log()`.

### `exercicios.js`
- Introduz funções com parâmetros e retorno:
  - `areaCirculo(raio)` calcula a área de um círculo
  - `IMC(peso, altura)` calcula o índice de massa corporal
  - `analisarIMC(imc)` classifica o resultado do IMC
  - `saudacao(hora)` retorna mensagem de acordo com a hora
  - `classificarPH(ph)` classifica uma substância acidez/básico/neutra
- Mostra como usar funções em um programa maior e como encadear resultados.

### `estacoes.js`
- Define a função `estacao(dia, mes)` que determina a estação do ano com base no dia e mês.
- Exemplo de uso comentado mostra como chamar a função com valores lidos do usuário.

### `estacoes.html`
- Complemento opcional que pode servir como exemplo de uso em navegador.
- A função `estacao()` também pode ser usada em páginas web para exibir o resultado no browser.

## Como executar

Para rodar os arquivos JavaScript no Node.js:

```bash
cd funcoes
node exemplo1_funcao.js
node exercicios.js
node estacoes.js
```

> Observação: `exercicios.js` usa `prompt-sync` para ler dados do usuário em Node.js. Se ainda não estiver instalado no projeto principal, instale com `npm install prompt-sync`.

## Boas práticas com funções

- Use nomes descritivos para funções e parâmetros
- Separe responsabilidades: cada função deve fazer apenas uma coisa
- Reutilize funções para evitar repetição de código
- Teste funções isoladamente antes de usá-las em programas maiores

## Tarefas sugeridas

1. Criar uma função `somar(a, b)` e testar com diferentes números.
2. Transformar o cálculo do IMC em função que também imprime o resultado.
3. Adaptar `estacao(dia, mes)` para receber `data` como objeto ou string.
4. Criar uma função que calcule a área de um triângulo e outra que calcule o perímetro.

---

Bom estudo! Use as funções para tornar seu código mais organizado e fácil de entender.
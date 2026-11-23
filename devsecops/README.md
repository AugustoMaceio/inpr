# Aula de DevSecOps: Segurança Integrada ao Ciclo de Desenvolvimento

Esta aula apresenta os conceitos de DevSecOps com exemplos em JavaScript/Node.js que você pode executar na pasta `devsecops`.

## Objetivos

- Entender o que é DevSecOps e por que ele existe
- Conhecer o conceito de *shift left* (segurança desde o início)
- Reconhecer as principais vulnerabilidades em código JavaScript
- Conhecer as etapas de segurança de um pipeline CI/CD (SAST, SCA, DAST, secrets)
- Praticar com exemplos de código vulnerável e código corrigido

## 1. O que é DevSecOps?

**DevSecOps = Development + Security + Operations.**

Na abordagem tradicional, a segurança era uma etapa final: o time desenvolvia, e só antes do deploy alguém "olhava a segurança". Falhas encontradas tão tarde são caras e lentas de corrigir.

No DevSecOps, a segurança é **responsabilidade de todos** e acontece **em todas as etapas**: planejamento, código, build, teste, deploy e operação.

| Abordagem | Quando a segurança entra | Custo de corrigir |
|-----------|--------------------------|-------------------|
| Tradicional | No fim do projeto | Alto |
| DevSecOps | Desde o planejamento (*shift left*) | Baixo |

### Princípios

1. **Shift left**: antecipar testes e revisões de segurança para o início do ciclo
2. **Automação**: verificações rodam sozinhas a cada commit
3. **Responsabilidade compartilhada**: dev, ops e segurança trabalham juntos
4. **Feedback rápido**: o desenvolvedor descobre o problema em minutos, não em meses
5. **Segurança como código**: políticas e configurações versionadas no repositório

## 2. O ciclo DevSecOps

```text
Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor
  |       |       |        |        |          |         |          |
Modelagem  SAST   SCA     DAST    Assinatura  Config.   Logs e    Alertas e
de ameaças Secrets Imagem  Testes  de artefato segura   resposta  correção
           Revisão  scan   de API                       a incidentes
```

## 3. Principais ferramentas por etapa

| Técnica | Sigla | O que analisa | Exemplos de ferramentas |
|---------|-------|---------------|-------------------------|
| Análise estática de código | **SAST** | Código-fonte, sem executar | ESLint (plugins de segurança), Semgrep, CodeQL |
| Análise de dependências | **SCA** | Bibliotecas de terceiros vulneráveis | `npm audit`, Dependabot, Snyk |
| Detecção de segredos | **Secrets scanning** | Senhas e tokens no repositório | Gitleaks, TruffleHog |
| Análise dinâmica | **DAST** | Aplicação em execução | OWASP ZAP |
| Segurança de contêineres | **Container scan** | Imagens Docker | Trivy, Grype |
| Infraestrutura como código | **IaC scan** | Terraform, YAML, Dockerfile | Checkov, tfsec |

## 4. Vulnerabilidades comuns em JavaScript

A referência mais usada é o **OWASP Top 10**, lista das falhas mais críticas em aplicações web.

### 4.1 Segredos no código (hardcoded secrets)

Vulnerável:

```js
const senhaBanco = 'admin123'
const chaveApi = 'sk_live_abc123'
```

Correto: ler de variáveis de ambiente e nunca versionar o arquivo `.env`.

```js
const senhaBanco = process.env.DB_SENHA
if (!senhaBanco) {
  throw new Error('Defina DB_SENHA no ambiente')
}
```

Adicione `.env` ao `.gitignore`. Se um segredo já foi commitado, **considere-o vazado**: troque a credencial, apagar o commit não basta.

### 4.2 Injeção de código (`eval` e afins)

Vulnerável:

```js
function calcular(expressao) {
  return eval(expressao) // executa QUALQUER código que o usuário enviar
}
calcular("process.exit(1)")
```

Correto: validar a entrada e nunca executar texto vindo do usuário.

```js
function somar(a, b) {
  const x = Number(a)
  const y = Number(b)
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new Error('Informe apenas números')
  }
  return x + y
}
```

### 4.3 Injeção de SQL

Vulnerável (concatenação de texto):

```js
const consulta = "SELECT * FROM usuarios WHERE nome = '" + nome + "'"
// nome = "x' OR '1'='1"  ->  retorna todos os usuários
```

Correto (consulta parametrizada):

```js
db.query('SELECT * FROM usuarios WHERE nome = ?', [nome])
```

### 4.4 XSS (Cross-Site Scripting)

Vulnerável:

```js
elemento.innerHTML = comentarioDoUsuario // pode conter <script>...
```

Correto:

```js
elemento.textContent = comentarioDoUsuario // trata tudo como texto
```

### 4.5 Dependências vulneráveis

Projetos Node.js usam centenas de pacotes. Uma falha em qualquer um deles é uma falha sua.

```bash
npm audit                # lista vulnerabilidades conhecidas
npm audit fix            # corrige o que for compatível
npm ci                   # instala exatamente o que está no package-lock.json
```

Boas práticas:

- Versione o `package-lock.json`
- Desconfie de pacotes com nomes parecidos com pacotes famosos (*typosquatting*)
- Remova dependências que você não usa mais
- Evite executar pacotes desconhecidos com `npx` sem ler o que eles fazem

### 4.6 Controle de acesso e senhas

- Nunca guarde senha em texto puro: use hash com sal (`bcrypt`, `argon2`)
- Aplique o **princípio do menor privilégio**: cada usuário e serviço recebe só o acesso de que precisa
- Valide a autorização no servidor, nunca apenas no front-end

## 5. Exemplo prático: validando entrada

Crie `exemplo_validacao.js`:

```js
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
```

Execute:

```bash
node devsecops/exemplo_validacao.js
```

## 6. Pipeline seguro: exemplo com GitHub Actions

Arquivo `.github/workflows/seguranca.yml`:

```yaml
name: seguranca
on: [push, pull_request]

permissions:
  contents: read        # menor privilégio para o token do pipeline

jobs:
  verificacoes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm audit --audit-level=high   # SCA
      - uses: gitleaks/gitleaks-action@v2   # segredos
      - uses: github/codeql-action/init@v3  # SAST
        with:
          languages: javascript
      - uses: github/codeql-action/analyze@v3
```

A cada `push`, o pipeline verifica dependências, segredos e código. Se algo grave for encontrado, o build **falha** e a falha não chega à produção.

## 7. Modelagem de ameaças (STRIDE)

Antes de codar, pergunte "o que pode dar errado?". O modelo **STRIDE** ajuda:

| Letra | Ameaça | Pergunta |
|-------|--------|----------|
| **S** | Spoofing (falsificação) | Alguém pode se passar por outro usuário? |
| **T** | Tampering (adulteração) | Dados podem ser alterados indevidamente? |
| **R** | Repudiation (repúdio) | Dá para negar que fez uma ação? Há logs? |
| **I** | Information disclosure | Dados sigilosos podem vazar? |
| **D** | Denial of service | O sistema pode ser derrubado? |
| **E** | Elevation of privilege | Alguém pode ganhar mais permissão que deveria? |

## 8. Checklist DevSecOps

- [ ] Nenhum segredo no repositório
- [ ] `.env` no `.gitignore`
- [ ] `package-lock.json` versionado
- [ ] `npm audit` sem vulnerabilidades altas ou críticas
- [ ] Entradas do usuário validadas
- [ ] Saídas escapadas (sem `innerHTML` com dados externos)
- [ ] Consultas ao banco parametrizadas
- [ ] Pipeline com SAST, SCA e secrets scanning
- [ ] Permissões mínimas em usuários, tokens e serviços
- [ ] Logs e monitoramento ativos

## Exercícios

1. Explique com suas palavras a diferença entre a abordagem tradicional e o DevSecOps.
2. O que significa *shift left*? Dê um exemplo.
3. Identifique a vulnerabilidade em cada trecho e proponha a correção:
   ```js
   const token = 'ghp_1234567890abcdef'
   ```
   ```js
   div.innerHTML = '<p>' + mensagem + '</p>'
   ```
   ```js
   const sql = `DELETE FROM pedidos WHERE id = ${req.query.id}`
   ```
4. Rode `npm audit` neste repositório e interprete o resultado.
5. Escreva uma função `validarEmail(valor)` que lance erro para e-mails inválidos.
6. Aplique o STRIDE a um sistema de login simples e liste uma ameaça para cada letra.
7. Pesquise: o que é um SBOM (*Software Bill of Materials*) e por que ele é importante?

## Resumo

- DevSecOps integra segurança a todo o ciclo, não só ao final
- *Shift left* reduz custo e tempo de correção
- Automatize: SAST, SCA, secrets scanning e DAST no pipeline
- Valide entradas, escape saídas, parametrize consultas, proteja segredos
- Segurança é responsabilidade de todo o time

// --------------------------------------------------------------------
// --------------------------------------------------------------------
//                           LAMBDA JS INTRO
// --------------------------------------------------------------------
//
// Esse guia é um resumo de conceitos essenciais que te permitem escrever
// javascript de uma maneira mais funcional.
//
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// No javascript podemos usar "var", "let", e "const" para declarar variáveis

function varExample () {
  var a = 1
  if (true) {
    var b = 2
  }
  console.log(a, b) // 1, 2
}

// A diferença de "var" e "let" é o escopo da variável declarada, ou seja, de
// onde essa variável pode ser acessada.
//
// Uma variável declarada com "var" tem como escopo a função onde foi declarada,
// enquanto uma variável declarada com "let" tem o escopo do bloco onde foi
// declarada (onde um bloco é qualquer quantidade de linhas de código entre
// chaves).

function letExample () {
  var a = 1
  if (true) {
    let b = 2
  }
  console.log(a, b) // ReferenceError: b is not defined
}

// Também é possível criar um 'bloco ad-hoc' (sem uma keyword como 'if' ou 'for'
// iniciando o bloco) simplesmente para criar um novo escopo:

function blockExample () {
  let a = 1
  {
    let b = 2
    console.log(a, b) //imprime 1 2
  }
  console.log(a, b) // ReferenceError: b is not defined
}

// "const" é a palavra que nós usaremos na maioria dos casos para declarar
// variáveis.  O escopo do "const" é igual o do "let", mas o "const" tem uma
// propriedade a mais: ele impossibilita você de referenciar algum outro valor
// para a variável declarada.

let a = 1
a = 2
a = "potato"
a += 1 // potato1

// Nós podemos fazer o que quisermos com a referência de "a". Mas se tentarmos
// fazer o mesmo usando "const":

const b = 1
b = 2 // TypeError: Assignment to constant variable.
b += 2 // TypeError: Assignment to constant variable.

// Isso pode parecer ruim caso você não esteja acostumado a trabalhar usando
// imutabilidade, mas com um pouco de tempo utilizando um paradigma mais
// funcional, essa prática começa a fazer sentido.

// O const não significa que a variável é uma "constante", ele apenas previne
// você de dar outro valor para ela usando "=" novamente. Inclusive, "const"
// para objetos funciona de forma um pouco contra-intuitiva:

const c = { a: 1, b: 2, c: 3 };
c.a = 4; // nenhum erro
c = {}; // TypeError: Assignment to constant variable.

// Ou seja, a keyword const impede você de modificar a referência a um objeto,
// mas não impede os campos de um objeto de serem modificados. Ainda assim, é
// uma boa prática não modificar os campos de um objeto sempre que possível.

// --------------------------------------------------------------------
// No javascript qualquer variável pode ser uma função ou o resultado de uma
// função, e tudo que pode receber um valor também pode receber uma função ou o
// resultado.

function umaFuncao () {
  console.log('faz coisas aqui dentro')
  return 'e sempre deveria retornar alguma coisa'
}

const funcao = umaFuncao

funcao === umaFuncao // true

const resultadoDeUmaFuncao = funcao() // 'e sempre deveria retornar alguma coisa'

function outraFuncao (parametro) {
  return parametro()
}

function tambemPodeSerUsadaComoParametro () {
  return 'confirmado!'
}

outraFuncao(tambemPodeSerUsadaComoParametro) // confirmado!
outraFuncao(1) // TypeError: 1 is not a function

// --------------------------------------------------------------------
// No javascript podemos reduzir funções em forma de "arrow functions"

// 'function declaration'
function double (x) {
  return x * 2
}
// 'function expression'
const double = function (x) {
  return x * 2
}
// 'arrow function'
const double = (x) => {
  return x * 2
}
// Arrow functions que teriam apenas um ";" não precisam de chaves. Por acaso
// você sentiu falta de algum ";" até agora? O ";" é opcional no javascript
// contanto que você não comece uma linha com "(" ou "[".
// Para mais informações sobre ";" acesse https://mislav.net/2010/05/semicolons/
const double = (x) => x * 2
// podemos omitir os parênteses
const double = x => x * 2

// Existe uma diferença sutil de comportamento entre a 'arrow-function' e a
// 'function expression' com relação à uma aberração no javascript chamada
// "this". Nós não falaremos dela nesse guia pois está fora do escopo.
// Para aprender sobre o this recomendo ver isso aqui:
// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md


// --------------------------------------------------------------------
// Imutabilidade e Funções puras

// Vamos fazer uma função que incrementa um número:
var contador = 0

const incrementar = () => {
  contador = contador + 1
  return contador
}

incrementar() // 1
incrementar() // 2
incrementar() // 3

// A função acima funciona como esperado. Nós criamos um contador que começa em
// 0 e fizemos uma função para incrementá-lo. Utilizei esse exemplo pois ele
// tem 2 peculiaridades:
//
// 1 - O contador é uma variável que nós criamos com a intenção de modificar. Modificar
// uma variável significa trocar o valor que ela tem, e isso é algo que você
// NÃO deve almejar ao utilizar um estilo funcional.
//
// 2 - A função incrementar não é pura pois ela altera algo fora dela. Repare
// que o contador não é enviado pra essa função, então ela primeiramente já
// está "errada" ao acessar algo que está fora dela, e além de fazer isso ela
// troca o valor da variável.
//
// Uma função pura deve:
// - Sempre acessar APENAS variáveis que foram enviadas para ela.
// - Sempre retornar alguma coisa.
// - Nunca alterar o valor das variáveis enviadas (imutabilidade).
// - Sempre para os mesmos valores de entrada você terá os mesmos valores de
// saída (Isso ajuda muito na hora de fazer testes)
//

// Agora vamos fazer o mesmo contador de forma pura e imutável:
const incrementarPuro = counter => counter + 1

incrementarPuro(0) // 1
incrementarPuro(1) // 2
incrementarPuro(2) // 3
incrementarPuro(0) // 1

incrementarPuro(incrementarPuro(incrementarPuro(0))) // 3

// Anteriormente nós não tínhamos como saber qual valor a função "incrementar"
// nos retornaria. Tudo bem que é fácil responder essa pergunta nesse exemplo
// pequeno, mas o ponto das funções puras é que elas trazem grandes benefícios
// pro código (que ficam cada vez mais evidentes quanto mais você usa o
// paradigma funcional). Por exemplo: incrementarPuro(0) SEMPRE vai te retornar
// "1" e você tem CERTEZA que isso nunca vai mudar contanto que você mude o valor
// do parâmetro.

// Uma função pode ser pura e não trabalhar 100% com imutabilidade. Contanto
// que a variável não seja alterada fora dela, não tem problema você fazer
// isso:
const tambemPura = (counter) => {
  // counter não imutável
  counter = incrementarPuro(counter)
  counter = incrementarPuro(counter)
  counter = incrementarPuro(counter)
  return counter
}
tambemPura(0) // 3

// Dica: Não use métodos como `push` e `splice` que alteram o objeto em vez de
// retornar um novo. Isso aqui por exemplo é uma demonstração do que NÃO se
// deve fazer:
const array = [1, 2, 3]

const naoFacaIsso = (arr, item) => arr.push(item)

naoFacaIsso(array, 4)
console.log(array) // [1, 2, 3, 4]

// Perceba que a função alterou o array fora dela. Ao invés disso procure
// sempre criar funções que apenas retornam coisas novas sem alterar as
// enviadas. Nesse caso utilizaremos o `concat` que tem o mesmo efeito porém
// sem modificar a entrada:
const array = [1, 2, 3]

const facaIsso = (arr, item) => arr.concat(item)

const novaArray = facaIsso(array, 4)
console.log(novaArray) // [1, 2, 3, 4]
console.log(array) // [1, 2, 3]


// --------------------------------------------------------------------
// Função de soma + `bind` para fazer aplicação parcial de parâmetros

const add = (x, y) => x + y
add(2, 3) // 5

// Esse null serve pra enviar um "this" pra essa
// função. Ignore ele pois o importante de se entender
// aqui é que podemos usar o `bind` para pré aplicar
// parâmetros em funções para criar funções novas.
//                      |
//                      V
const add5 = add.bind(null, 5)
add5(10) // 15

// Sem `bind`
const addCurried = x => y => x + y

const add6 = addCurried(6)
add6(10) // 16


// Curried? O que é isso? "Currying" é uma técnica que utilizamos para criar
// funções de maneira com que só podemos passar de 1 em 1 parâmetro. Essa
// técnica vem do lambda-calculus que é o modelo matemático no qual a
// programação funcional é fundada, essa foi a primeira maneira de fazermos
// "aplicação parcial" de funções mas ela tem um problema:

addCurried(2)(3) // 5
addCurried(2, 3) // y => x + y

// Infelizmente vimos que não podemos chamar a função direto com os 2
// parâmetros, nós somos obrigados a enviar de 1 em 1. Seria legal se pudéssemos
// utilizar a função acima das 2 maneiras né? Então continuemos:

// --------------------------------------------------------------------
// Ramda - Todas as funções são puras, nunca modificam a entrada, sempre retornam
// alguma coisa, e podem ser parcialmente aplicadas da maneira que você quiser.
// http://ramdajs.com/

// A partir de agora recomendo você ver nas docs do ramda o que as funções que
// utilizamos aqui fazem.

import { curry, prop, propEq, filter } from 'ramda'

const add = curry((x, y) => x + y)

const add5 = add(5)
add5(10) // 15

add(5)(10) // 15
add(5, 10) // 15 <- Lembra dessa forma que não funcionava no exemplo do
//                  `addCurried`? No ramda isso funciona :)

const transaction = { amount: 1000, status: 'paid' }
prop('status', transaction) // 'paid'
propEq('status', 'paid', transaction) // true

const transactions = [
  { amount: 1000, status: 'paid' },
  { amount: 2400, status: 'refunded' },
  { amount: 3000, status: 'paid' },
  { amount: 4000, status: 'paid' },
  { amount: 5500, status: 'refunded' },
]

// Filtrando transações com status paid:

// sem ramda
const statusPaid = transaction => transaction.status === 'paid'
const uglyPaidOnly = transactions => transactions.filter(statusPaid)
uglyPaidOnly(transactions)

// usando o filter do ramda
const statusPaid = transaction => transaction.status === 'paid'
const paidOnly = filter(statusPaid)
paidOnly(transactions) // ou seja, executamos o filter assim: filter(statusPaid, transactions)

// e agora o `propEq`
const statusPaid = propEq('status', 'paid')
const paidOnly = filter(statusPaid)

paidOnly(transactions)
// Note o quão mais limpo fica o código pois podemos omitir coisas redundantes
// e fazer funções cada vez mais genéricas.

// --------------------------------------------------------------------
// Ramda + promises = <3

import { propEq, filter } from 'ramda'

const transactions = 'https://api.pagar.me/1/transactions'

fetch(transactions)
  .then(transaction => transactions.filter(transaction => transaction.status === 'paid'))

const statusIs = propEq('status')

fetch(transactions)
  .then(transaction => transactions.filter(statusIs('paid')))

fetch(transactions)
  .then(filter(statusIs('paid')))

fetch(transactions)
  .then(filter(statusIs('refunded')))

// --------------------------------------------------------------------

// Componha funções a partir das que você já tem

import { pipe, add } from 'ramda'

const double = x => x * 2

// `pipe` e `compose` te permitem criar novas funções complexas a partir de
// pequenas funções simples:
const add10AndDouble = pipe(add(10), double)

add10AndDouble(5) // 30

// `Promises` funcionam como `pipes`, porém são assíncronas:
Promise.resolve(5)
  .then(add(10))
  .then(double)
  .then(console.log) // 30


// Se você gostou disso recomendo dar uma olhada no guia básico de ramda que
// também está nesse repo aqui:
// https://github.com/pagarme/lambda/blob/master/ramda.md

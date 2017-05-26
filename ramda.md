
# Ramda

## Links

* **Homepage:** [ramdajs.com/](http://ramdajs.com/)
* **Docs:** [ramdajs.com/docs/#](http://ramdajs.com/docs/#)
* **REPL online:** [ramdajs.com/repl/?v=0.23.0](http://ramdajs.com/repl/?v=0.23.0)

## Intro

Ramda é uma biblioteca feita para você escrever funções curtas e fáceis de
serem juntadas para criar funções complexas. É comum você quase não escrever
nomes de argumentos de funções quando se utiliza Ramda ao máximo de seu
potencial, isso é possível graças à um conceito chamado de **aplicação
parcial**, ou no *lambda calculus* de **currying**. Existe uma pequena difereça
formal entre os 2 conceitos mas no Ramda em específico os 2 funcionam como
aplicação parcial.

Todas as funções da Ramda são **puras**, **imutáveis**, e **curried** por
padrão. Isso permite um alto desacoplamento de lógica no seu código, e junto
com as ferramentas de composição de funçoes é possível reduzir drasticamente a
repetição de código. Além disso existem ferramentas dentro dela extremamente
avaçadas para compor pipes de operações de lista (*transducers*)

* Exemplo de `partial application`
```js
const { add } = require('ramda')

const add5 = add(5)

console.log(add(5, 10)) // 15
console.log(add(5)(10)) // 15
console.log(add5(10)) // 15
```

* Exemplo de `partial application` + `composition`
```js
const { add, multiply, pipe } = require('ramda')

const add5AndDouble = pipe(
  add(5),
  multiply(2)
)

console.log(add5AndDouble(10)) // 30
```

* Exemplo de `partial application` + `composition` + `list manipulation`
```js
const { map, prop, reduce, add } = require('ramda')

const transactions = [
  { amount: 1000 },
  { amount: 2000 },
  { amount: 3000 },
  { amount: 4000 },
]

const sumAmounts = pipe(
  map(prop('amount')),
  reduce(add, 0)
)

console.log(sumAmounts(transactions)) // 10000

```

## Aprenda

A Ramda tem 238 funções, mas a maioria delas fazem coisas semelhantes. Separei
uma lista das que julgo fundamentais para começar a utilizar Ramda no dia a
dia, e quando possível tente ir buscando coisas nela que resolvem seu problema
de um jeito mais fácil.

Também recomendo ler os artigos que estão na homepage na seção *Introductions*.
Eles ajudam você a modelar seu pensamento para esse novo paradigma de
manipulação de estruturas de dados.


### Math and Relations

<details>
<summary>Common functions that normally are operators</summary>

- [add](http://ramdajs.com/docs/#add)
- [subtract](http://ramdajs.com/docs/#subtract)
- [divide](http://ramdajs.com/docs/#divide)
- [multiply](http://ramdajs.com/docs/#multiply)
- [equals](http://ramdajs.com/docs/#equals)
- [gt](http://ramdajs.com/docs/#gt)
- [gte](http://ramdajs.com/docs/#gte)
- [lt](http://ramdajs.com/docs/#lt)
- [lte](http://ramdajs.com/docs/#lte)
</details>

### List

<details>
<summary>Functions that does all sort of list operations</summary>

- [**map**](http://ramdajs.com/docs/#map)
- [**filter**](http://ramdajs.com/docs/#filter)
- [**reduce**](http://ramdajs.com/docs/#reduce)
- [find](http://ramdajs.com/docs/#find)
- [append](http://ramdajs.com/docs/#append)
- [concat](http://ramdajs.com/docs/#concat)
- [contains](http://ramdajs.com/docs/#contains)
- [drop](http://ramdajs.com/docs/#drop)
- [head](http://ramdajs.com/docs/#head)
- [join](http://ramdajs.com/docs/#join)
- [prepend](http://ramdajs.com/docs/#prepend)
- [split](http://ramdajs.com/docs/#split)
- [tail](http://ramdajs.com/docs/#tail)
- [take](http://ramdajs.com/docs/#take)
- [times](http://ramdajs.com/docs/#times)
- [without](http://ramdajs.com/docs/#without)
</details>

### Object

<details>
<summary>Functions that does all sort of hashmap operations</summary>

- [map](http://ramdajs.com/docs/#map)
- [filter](http://ramdajs.com/docs/#filter)
- [**lensProp**](http://ramdajs.com/docs/#lensProp)
- [**prop**](http://ramdajs.com/docs/#prop)
- [set](http://ramdajs.com/docs/#set)
- [view](http://ramdajs.com/docs/#view)
- [has](http://ramdajs.com/docs/#has)
- [toPairs](http://ramdajs.com/docs/#toPairs)
</details>

### Functions

<details>
<summary>Building blocks for composition</summary>

- [**__**](http://ramdajs.com/docs/#__)
- [always](http://ramdajs.com/docs/#always)
- [ap](http://ramdajs.com/docs/#ap)
- [compose](http://ramdajs.com/docs/#compose)
- [**pipe**](http://ramdajs.com/docs/#pipe)
- [**curry**](http://ramdajs.com/docs/#curry)
- [partial](http://ramdajs.com/docs/#partial)
- [tap](http://ramdajs.com/docs/#tap)
</details>

### Logic

<details>
<summary>Functions that helps splitting the the code flow</summary>

- [allPass](ramdajs.com/docs/#allPass)
- [and](ramdajs.com/docs/#and)
- [both](ramdajs.com/docs/#both)
- [cond](ramdajs.com/docs/#cond)
- [defaultTo](ramdajs.com/docs/#defaultTo)
- [either](ramdajs.com/docs/#either)
- [ifElse](ramdajs.com/docs/#ifElse)
- [not](ramdajs.com/docs/#not)
- [or](ramdajs.com/docs/#or)
</details>

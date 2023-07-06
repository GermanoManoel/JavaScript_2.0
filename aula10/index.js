// Dados Primitivos 
// String, Number, Undefined, Null e Boolean

const nome = 'Manoel';  /* String */
const nome1 = "manoel"; /* String */
const nome2 = `MANOEL`; /* String */

const num1 = 7; /* Number */
const num2 = 9.7; /* Number */

let nomeAluno; // Você declarou uma variavel mas não inicializou ela. O tipo dela fica como UNDEFINED, porque nenhum valor foi definido a ela. -> Não aponta pra local nenhum na memória.


let sobreNome = null; //Nulo -> Também não aponta pra local nenhum na memória, porém não é igual a UNDEFINED. A diferença é que quando tu for explicita que uma variael não tem espaço na memoria, tu vai da a ela o valor NULL e não o UNDEFINED. Os dois eles são valores iguais, mas quem fala que uma variavel e undefined é o JS, que por acaso a gente não usa esse valor undefined, quando quiser explicita, colocar uma variavel não tem espaço na memoria  use como valor null, como o exemplo ai em cima

const aprovado = true; //Bolean ele vai muito mais que alem do que (true, false), por enquando vamos ficar com isso depois a gente ver mais coisa. Geralmente a gente usa o valor boolean quando a gente quer muda o fluxo da nossa aplicação, dai a gente vai ter um desvio condicional. 

console.log(typeof sobreNome, sobreNome)
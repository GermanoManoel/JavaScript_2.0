// Mais Sobre String (Aula 26) •  PADRÃO DO JS: IEEE 754-2008
let num1 = 10;
let num2 = 2.5;
/* • .toString() Muda do tipo Number para String, no exemplo abaixo a gente usou o .toString() para muda o tipo do NUM1 de number para string. Dai ao invés de somar ele vai concatenar.*/
// console.log(num1.toString() + num2);
/* 
O .toSting() também serve para tu ver os números binarios.
por exemplo: 
*/
// num1 = num1.toString(); // -> Aqui tu tas passando de forma definitiva a variavel num1 para string. 

console.log(num1.toString(2)); // -> Veja bem que agora a gente tem o número 2 dentro dos parenteses do .toString(), esse número 2, faz com que tu veja o número binario -> são composto de 0 e 1.
console.log('-----------------------------------------');

let num3 = 10.323232323;
/* • .toFixed() -> Serve para quando tu tiver um número com muitas casas decimais, por exemplo: 10.323232323 dai com esse .toFixed() tu escolhe quantas casas decimais tu quer exibir. */
console.log(num3.toFixed(2))// -> Aqui tu tás passando pra ele que tu quer ver só duas casas decimais, dai ele vai só mostrar o 10.23 em vez daquele número gigante ali em cima.
console.log('-----------------------------------------');


/* • .isInteger() -> Faz uma verificação se o número recebido pela aquela variavel, é inteiro ou não. Caso o número seja inteiro ele vai te retorna o valor TRUE, caso seja um valor real ele te retorna FALSE.
Por Exemplo: 
*/
let num4 = 7;
console.log(Number.isInteger(num4)); /* -> Atenção como se digita no console.log()! Veja que tu tás passando na função 
.isInteger() a tua variavel num4 que é a que tu quer verificar se é um número Inteiros. */
console.log('-----------------------------------------');

/* • .isNaN() -> Da para gente ver se o valor da varival vai ser um NAN, caso seja tu recebe o valor de true, caso não recebe o valor false.*/
let num5 = 10;
let temp = num5 * 'Ola'; /* ->  A gente viu que não da para fazer conta com um número e uma string que tem caractere. O resultado seria NAN. */
console.log(Number.isNaN(temp)); // -> Aqui tu tás perguntando pro JS se o número é um Not A Number, se for ele te retorna verdadeiro, senão ele vai te retorna false.
console.log('-----------------------------------------');

 
/* • As contas do javaScript ela segue um padrão que a gente chama de IEEE 754 - 2008, elas tem uma imprecisão!
Por Exemplo: */

let num6 = 0.7;
let num7 = 0.1;
num6 += num7; // -> Lembrando que isso é igual a num6 = num6 + num7. 0.8
num6 += num7; // 0.9
num6 += num7; // 1.0

num6 = Number(num6.toFixed(2)); 
console.log(num6); // ->se tu fazer a conta de cabeça tu vai ver que o resultado é 0.8, porém no JS ele vai dar 0.7999999... Ou seja você ver que ele tem uma imprecisão.


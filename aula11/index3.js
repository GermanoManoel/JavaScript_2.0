// Operadores de Atribuição

/* • Pode acontecer que tu em vez de querer incrementar de 1 em 1, tu queira incrementar número maiores que 1. 
Nesse caso não vai funcionar o numero++ por exemplo. Porque tu quer ir de números maiores que 1, nesse caso tu vai ter que fazer assim: */

let numero = 0;
numero = numero + 10; // -> Veja que a você tá utilizando um número maior que 1 agora, que no caso é o 10.
console.log(numero);
numero = numero + 10; //-> Aqui ele já vai pegar o número 10 e somar com mais 10 que vai ser igual a 20 no console.
console.log(numero);
numero = numero + 10; // -> 20 + 10 = 30
console.log(numero);
console.log('-----------------------------------');
//  • Tem formas mais simples de fazer isso que é usando o:
/* 
   += vai somar
   -= vai subtrair
   *= vai multiplicar
   /= vai dividir

   Por exemplo:
*/
let numero2 = 2;
numero2 *= 10; //-> Mesma coisa que tu fazer:  numero = numero + 10, que tá no exemplo acima. 
console.log(numero2); 
numero2 *= 10; // - > 20 * 10 = 200 mesma coisa que ter numero2 = 20 * 10
console.log(numero2); 
numero2 *= 10; // -> 200 * 10 = 2000 mesma coisa que ter numero2 = 200 * 10
console.log(numero2);


// NAN ou Not A Number
// exemplo:
let num1 = 7;
let num2 = '7';
console.log(num1 + num2); 
console.log("-----------------------------------");
// • No terminal ele te retornara NAN porque tu tas tentando subtrair um número com uma strig que tem letrar. Porém se caso tu colocar '2' um número em vez de letras na variavel (num2). O JS vai tentar resolver esse problema pra tu, convertendo a string como número e te retornando o valor. 

// Obs: Lembre que o sinal de + serve tanto para somar ou para concatenar, se tu colocasse um de + em vez da subtração, o terminal iria pegar o número 7 e concatenar com o nome Germano.

// Tem uma forma da gente trata esse Not A Number, porém vamos ver mais pra frente...

/* • Da pra tu tranforma uma variável que ta guardando um número do tipo string usando

parseInt(); -> Converte número do tipo string em número inteiros.
parseFloat(); -> Converte números do tipo string em número reais ou seja com pontos flutuantes.
Number(); -> Converte número do tipo strin em número tanto em intero quando número reais. O javascript que se vira pra converte.

Por exemplo: */

let n1 = 7;
let n2 = parseInt('7'); // -> Veja que tu tás ultilizando o parseInt para converter uma string em um número inteiro. Dai tu pode usar o parseFloat() também ou o Number() que é o melhor pra se usar, fica mais simples.
console.log(n1 + n2);

// Agora se tu quiser tranforma uma string com letras em número inteiro ou real. Tu volta ele te dando o valor NAN no terminal.

// Exemplo:

let n3 = 3;
let n4 = parseInt('germano'); //  -> Aqui tu tás tentando transforma uma string com caracter em um numero inteiro, e isso não é possivel.
console.log(n3 + n4);


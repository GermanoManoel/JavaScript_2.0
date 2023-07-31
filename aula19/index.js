// • Valores Primitivos e Valores Por Referencia

/*
// • Valores Primitivos

 Primitivos (imutáveis) - Strings, Number, Bolean, Undefined, Null, (Bigint, Symbol).
 Os tipos primitivos eles são imutáveis, ou seja, tu não pode mudar nada dele.
 */

 let nome = 'Luiz';
 nome = 'Germano'; // -> Nesse caso aqui tu não tás trocando valor primitivo em expecifico. Tu aqui tás trocando o valor da variavel que era Luiz e agora tá Germano, porém o dado primitivo STRING continua.
 console.log(nome);

//  Outro exemplo:

let a = 'A';
let b = a; // -> Veja que a variavel b recebe o valor de A, é uma cópia. 
console.log(a, b);
//           ↳ No console.log tanto o a quanto o b tem o valor 'A'. Ambos são independentes um do outro A não depende de B e B não depende de A a não ser pra pegar o sseu valor na primeira vez. Ao longo do código B vai manter seu valor indepedente do valor que A tiver.

// Veja: 

a = 'Outa coisa'; // -> Ainda seguindo o exemplo a cima. A gente reatribuio outro valor pra variavel a.
console.log(a, b);
//            ↳ Aqui tu vai ver que A vai ficar 'Outra coisa' e b vai ficar 'A' que é o valor que eles tem acima. Veja que o b não depende de a, então quando a gente altera o valor de um o outro não sente. Porque eles não são MUTAVEIS , ou seja, eles não dependem um do outro. 


// • Valores passado por referencia

/* Valores passado por referência (Mutável) - Array, Object e Function.
Os passados por referência são Mutáveis, ou seja, tu pode mudar eles.*/

let c = [1, 2, 3];
let d = [...c]; //->
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

e.push(4,5,6,7);
console.log(c,d,e);

//A gente pode concluir que os valores primitivos eles são copiados quando a gente passa os valores dele para outra variavel utilizando o sinal de atribuição ( = ).




// Objeto Math

//No javascripta gente tem esse objeto chamado Math ,ele tem muitas coisas relacionada a matématica.

/* • Math.floor() -> Arredonda um número real ou seja com casas decimais para baixo tornando ele um número inteiro.
O 9.523232 que tu tem ai em baixo, vai se torna 9. */
let num1 = 9.523232;
let num2 = Math.floor(num1);
console.log(num2);
console.log("----------------------------------------------");

/* • Math.ceil() -> Arredonda um número real ou seja com casas decimais para cima tornando ele um número inteiro.
O 9.51231 que tu tem ai em baixo, vai se torna 10. */

let num3 = 9.51231;
let num4 = Math.ceil(num3);
console.log(num4);
console.log("----------------------------------------------");

/* • Math.round() -> Esse metodo ele vai arrendondar pro mais próximo.
Por exemplo: O número que tu tem é 9.49 ele vai arredondar pra 9, se o número for 9.60 ele vai arredondar para 10. Ele se vê se a casa decimal, se ela estiver mais perto do 9 ele arredonda pra 9 se ela estiver mais perto do 10 ele arredonda para 10. */

let num5 = 9.55; /*-> Veja que como o número da casa decimal está mais perto do 9, ele arredondou pra 9. Se tu troca pra 9.55 por exemplo, ele vai arredonda pra 10. Porque ele fica "mais perto do 10" digamos assim. casa decimal 49 pra baixo ele arredonda pra baixo 50 pra cima ele arredonda pra cima. */
let num6 = Math.round(num5);
console.log(num6);
console.log("----------------------------------------------");

/* • Math.max() -> Ele te mostrar o maior número de uma sequência de números.
Por exemplo: 
  • Math.min() -> Ele te mostra o menor número de uma sequência de número. É o contrario do Math.max()*/

console.log(Math.max(1,2,3,4,5,6,7,-1,-2,-3,1000,8,9,10)); // -> Veja que aqui tu tem uma sequencia de números tudo misturado e o Math.max ele te mostrou o número maior dessa sequência.
console.log("----------------------------------------------");

/* • Math.random() -> Vai te gerar um número aleatorio entre 0 e 1, só que o 1 nunca vai ser incluido na parte inteira. Dai ele vai gerar um número aleatorio com varias casas decimais. 
Exemplo: */
console.log(Math.random());
console.log("----------------------------------------------");

/* •  Ainda com Math.random(), você pode querer um número aleatorio não de 0 a 1 por exemplo. Possa ser que tu queira um valor entre 7 e 10, tu pode fazer isso! 
Por exemplo: */

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // -> sempre que tu executar tu vai ter um número aleatorio entre 10 e 7, se tu quiser pode colocar o Math.Round() fora para que ele arredondade o número real para inteiro. 
console.log(aleatorio);
console.log("----------------------------------------------");

/*• Math.PI, Vai te mostrar o valor de PI. Esse não precisa de parenteses!
Exemplo: */
console.log(Math.PI);
console.log("----------------------------------------------");

/* Math.pow, Vai te mostrar a potência de dos número
Por exemplo: */
console.log(Math.pow(2 , 10)) //-> Aqui basicamente é 2**10, Dois elevada a dez 
console.log(2**10);
console.log("----------------------------------------------");

/* Math.sqrt() -> pra tu saber a raiz quadrade de um número */
console.log(Math.sqrt(25));


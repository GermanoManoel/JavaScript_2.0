// Mais Sobre Strings

let umaString = 'Um \'Texto\'';
console.log(umaString);
console.log('------------------------------------');

// let segundaString = 'Um \texto'; /*-> Tu usando barra invertida só uma vez, tu vai apagar teu T e colocar um espaço ali. Só uma barra invertida faz isso, ela te da um espaço. Agora se tu quiser que fique com uma barra invertida mesmo, tu tem que usar duas barra invertida.
 /*Por exemplo: */
let segundaStrings = '1º Um \texto'; //-> Uma barra invertida só vai dar um espaço
let segundaString = '2º Um \\texto';// -> Duas barra invertida vai pegar a barra invertida, uma vai ser o escape e outra vai ser a exibição.
console.log(segundaStrings, segundaString)
console.log('------------------------------------');

/* Strings são indexadas.
Ou sejacada caractere tem um indice. por exemplo esse caractere 
'Um texto' tem 
 01234567 caractere. 7 porque o espaço conta também  se não seria só 6. cada número representa uma letra ali em cima da
string, caso tu tivesse mais letras, teria mais número.*/

let terceiraString = 'Um texto';
console.log(terceiraString[7]); //-> Aqui tu tas pedindo pra exibir só a letra que está na posição 5. Caso tu coloque um número que não esteja nesse ranger maior que 7 ou menor que 0, ele vai dar UNDEFINED, porque só tem 7 caractere ali, lembrando que o espaço conta também.
console.log('------------------------------------');

// Tu pode usar funções ao chamar tuas strings

let quartaString = 'Um texto';
console.log('.charAt():', quartaString.charAt(3));
console.log('------------------------------------');
/* Veja que ao chamar nossa variavel a gente usou um ponto depois, quando tu fazer isso o JS vai te mostrar um monte de funções que você poder usar.
Entre elas temos:

1º .charAt() -> Ela basicamente vai pegar o elemento que está em tal posição. Como o exemplo acima, o diferente é que se caso tu coloque um 8 ela não vai te dá UNDEFINED como o de cima, e sim ela vai te mostrar nada, que no caso é vazio.

2º .concat("") -> Essa você é muito dificil de ser usada porque serve para concatena, porém a gente já viu que tem jeitos mais simples usando o Template String `${} + olá` para fazer isso.

3º .indexOf("") -> Mostra em qual indece tal palavra começou. 
Por exemplo: */

let quintaString = 'Um texto';
// indice:          01234567
console.log('.indexOf(""):', quintaString.indexOf("texto")); 
/* -> Ele vai te mostrar qual indece a palavra texto começou, lembrando que o indice ai é 01234567, ele vai te mostrar o 3 porque a palavra texto começa no indice 3. Agora presta atenção na hora que for escrever o nome da palavra na função caso tu colocar texto com T maiusculo, ele não vai achar e te retorna -1. O JEITO DE COMO TU ESCREVE A PALAVRA NA FUNÇÃO, É MUITO IMPORTANTE! 
  Tu pode também pegar a palavra tal ou letra que começa no indece tal em vez o indice 0.
    Por exemplo: 
    console.log(quintaString.indexOf("t", 4)); -> Aqui ele vai exibir o 6, porque proximo letra T começando no indice 4 que é o E, está no indice 6. Caso não tenha a palavra ele te mostra o -1*/
console.log('------------------------------------');

/* 4º .lastIndexOf ->  Mesmo raciocinio do indexOf, porém o lastIndexOf começa do final da string*/
let sextaString = 'Um texto';
// indice:         76543210
console.log('.lastIndexOf(""):', sextaString.lastIndexOf("o",3)); // -> Ele te retorna -1 porque começando da direita para esquerda não tem nenhuma letra O. Se tivesse ele iria te mostrar qual indice ela está!
console.log('------------------------------------');
/* No JS você tem algumas funções referente a expressões regulares! 
    POR EXEMPLO:
5º .metch()
6º .search()
7º .replace() -> Muda uma palavra que tu tem numa string para outra palavra.
    por exemplo: */
    let setimaString = 'Um texto';
    console.log('.replace(""):', setimaString.replace("Um", "Outro")); // Veja na saida que o .replace() mudou a palavra 'Um' para 'Outro'. OBS: preste atenção na escrita, caso a palavra Um que está com U maiusculo, seja colocada dentro do .replace() em menusculo não vai funcionar!
    console.log('------------------------------------');
/* 8º .lenght -> Mostra o tamanho da tua string, não é uma função e sim um atributo, não precisa dos parenteses. Ele te dá o tamanho 8 porque começa com número 0. 01234567*/
    let oitavaString = 'Um texto';
    console.log('.length: ', oitavaString.length); 
    console.log('------------------------------------');

/* 9º .slice                     ...-10-9-8-7-6-5-4-3-2-1 */                                             
    let nonaString = 'O rato roeu a roupa do rei de roma.'
    console.log(nonaString.length - 3);
    console.log(nonaString.slice(-35, -29)); // -> Máximo - O quanto de indice tu quer tirar  
    console.log('------------------------------------');
    
/*10º .split -> Divide o caractere que tu quer, vai te mostrar um array sem os R se tu colocar console.log(decimaString.split("r")) 
Por exemplo: */

let decimaString = 'Germano Manoel De Melo'
console.log(decimaString.split(' '));

/* 11º .toUpperCase -> deixa as letras em maiúsculas.
   12º .toLowerCase -> deixa as lestras em minúsculas.*/
/* Regras para declara uma constante 

1º Não pode usar palavras reservadas ! 
2º As constantes precisa ter nome significativos !
3º Não começar com número !
4º Não poder ter espaço em branco! 
    Ex: 
    Nome cliente [X]
    nome_cliente [⩗] 
5º Não pode ter espaço em branco! Nesse caso use o (CAMELCASE) EX: nomeDoAluno
6º Case-sensitive
7º Não pode modificar um valor de uma constante
8º Não ultilize VAR, ultilize CONST ! */

/*const nome = 'Germano'
  console.log(nome);*/

// Operadosres:  + - * /
// String == Texto | Number == Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero; // == 50 
const resultadoDuplicado = resultado * 2; // == 100
let resultadoTriplicado = resultado * 3; // == 150
resultadoTriplicado = resultadoTriplicado + 5; // resultadoTriplicado = resultadoTriplicado + 5 == 155; Aqui você estás atribuindo um novo valor a let resultadoTriplicado.
console.log(typeof(primeiroNumero + segundoNumero));
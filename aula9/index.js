/* Diferença entre VAR e LET */

//  Com VAR você pode declarar e redeclarar uma variável !
var nome = 'Germano';
var nome = 'Manoel'; /* -> Aqui você está redeclarando a variável NOME. Porém com VAR pode! */

// Com LET você pode declarar mas não pode redeclarar a variável !
let nome = 'Germano';
nome = 'Manoel'; /* -> Aqui você está passando um novo valor a variável NOME, porém não pode redeclarar ela. redeclarar é você colocar ( let nome = 'BRENO') por exemplo.  */
nome = 'melo';
console.log(nome);
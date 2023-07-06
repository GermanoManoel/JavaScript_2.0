/*
 Germano Manoel De Melo tem 20 anos, pesa 70KG 
 tem 1.83 de altura e seu IMC é de 20.902...
 Germano Manoel De Melo nasceu em 2002
*/

/*  
Antes de começar criar as variáveis ou const. Faça a seguinte pergunda:  
    "A variavel nome, sobrenome, idade, peso e altura vai mudar?" 
    Se caso a resposta for SIM, então usa VAR OU LET.
    Se caso a resposta for NÃO, use CONST.
*/

const nome = 'Germano Manoel';
const sobrenome = 'De Melo'
const idade = 21;
const peso = 70;
const alturaEmM = 1.83;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);  /* Para saber o IMC essa é a formula: peso / (altura * altura) ou (altura**2) altura ao quadrado*/
let anoNascimento = 2023 - idade;

// Template strigs é  uma string que você pode colocar variáveis dentro dela.

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`); 
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
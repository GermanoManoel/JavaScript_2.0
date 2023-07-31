/*
 • Operadores Lógicos

 && → AND → E
 || → OR → OU
 ! → NOT → NÃO
 */

/* 
   • && - E 
 Com And todos tem que ser verdadeiro pra te retorna true. Se tiver um false, ele vai te retorna false!
 */
 const expressaoAnd = true && true && true && true;
 console.log("And: "+ expressaoAnd);

console.log("--------------------------");

/* 
   • || - Ou Com Or 
Basta um ser verdadeiro que vai dá true. Se tiver um só verdadeiro ele te retorna true! 
*/
 const expressaoOr = false || false || true || false;
 console.log("Or: "+ expressaoOr);

 console.log("--------------------------");

//EX:

 const usuario = 'Germano';
 const senha = '1234567';
//                       true                   false
 const vaiLogar = usuario === 'Germano' && senha === '1234567';
 console.log(vaiLogar)

 console.log("---------------------------");

/* 
  • ! - NÃO / NEGAÇÃO
*/

console.log(!true);
console.log(!!true); //-> Aqui tu tás negando duas vez, true negando uma vez vai pra false, do false ele nega mais uma vez e fica true.
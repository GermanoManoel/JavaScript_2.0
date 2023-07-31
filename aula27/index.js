// Operadores Ternarios. 
/* Os operadores ternarios são:  ?  :
Eles substituem um IF e ELSE quando tu tiver partes que precisa de um IF e um ELSE só naquele trecho, fazendo com que tu economeize espaço. 

POR EXEMPLO:
*/

/*
1º 
const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000){
    console.log("Usuário VIP");
}else{
    console.log("Usuário normal");
 }
 */

/*
As duas fazem a mesma coisa, porém essa usando os operadores ternarios fica muito mais simples quando se tem só um IF E ELSE no teste lógico. 
2º 


*/
const pontuacaoUsuario = 999;
//                      (CONDIÇÃO) ? "VALOR PARA VERDADEIRO" : "VALOR PARA FALSO";
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";
console.log(nivelUsuario);

// FALLBACK

const corUsuario = "blue";
const corPadrao = corUsuario || 'black';
console.log(corPadrao);



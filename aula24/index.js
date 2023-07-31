// If,Else e Else If

// Serve para gente desvia o fluxo da nossa aplcação quando necessario.  Imagina que tu tenha um sistema que dependendo do horário ele fale "Bom Dia" pro usuario. Se a hora for menor que 12 ele fala "Bom Dia" se não ele não fala nada.

// Por Exemplo: 
const nome = "Germano";
const hora = 14;

/* if (hora < 12){
    console.log("Bom Dia! " + nome);
}
else{
    console.log("...");
} */

// Exemplo 02: 
/* 
Entre  0 && 12 - Bom Dia!
Entre  12 && 18 - Boa Tarde!
Entre  18 && 23 - Boa Noite!
*/

// REGRAS:
// 1º IF pode ser usado sozinho.
// 2º Sempre que utilizo a palavra ELSE, preciso de um IF antes.
// 3º Você pode ter varios ELSE IF na checagem.
// 4º Só pode ter um ELSE na checagem, que fica por último.
// 5º Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE.

if ( hora >= 0 && hora < 12) {
    console.log("Bom Dia!");
}
else if ( hora >= 12 && hora < 18) {
    console.log("Boa Tarde!");
}
else if ( hora > 18 && hora < 23) {
    console.log("Boa Noite!");
}
else {
    console.log("Olá");
}

console.log("---------------------------------------");

const tenhoGrana = true;

if (tenhoGrana) {
    console.log("Vou sair de casa!");
} else {
    console.log("Não vou sair de casa!");
}
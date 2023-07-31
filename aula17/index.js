// Função (básica)
function saudacao(nome){
    //console.log(`Bom Dia ${nome}!`);
    return `Bom Dia ${nome}!`;
}
//          ↱ Tambem podemos passar um parametro para ess função
saudacao("Germano"); //-> Aqui tu tas chamando tua função saudacao(), veja que dentro do bloco tem um console.log("Bom Dia") se tu executa tu vai ver que vai mostrar ali na saida um bom dia.

saudacao("Manoel"); //-> A função ela e reutilizavel, ou seja tu pode utilizar ela em qualquer lugar  do teu código e tu pode passar qualquer valor pra ela que ela vai executar.

const variavel = saudacao("Melo"); /*Aqui tu tas passando pra tua função saudade que tem o parametro nome, o valor "Melo". O Return ele cria a frase que vai te retorna, e retorna pra tua const variavel. Dai ela fica assim: const variavel = `Bom dia Germano!`;  Dai se tu der um console.log(variavel) ela vai exibir o: Bom Dia Melo!, e não o undefined como tinha antes porque ela não tinha return*/
console.log(variavel); //-> Aqui tu vai exibir a const variavel, que ta com o valor `Bom Dia Germano`.

//              ↓      ↓ Fazendo com que a função assuma os valores 1 para x e y.
function soma(x = 1, y = 1){
    const resultado = x + y;
    return `O resultado é igual a: ${resultado}`;
}

console.log(soma(5,95)); // -> Aqui mesmo que tu não passe os argumentos, a função ta assumindo pra x e y o valor 1. Dai ela vai te da o retorno de : O RESULTADO É IGUAL A 2. Se tu não passasse os argumentos.
// -> Tu pode também só passar um argumento ai, por exemplo: Se tu passar só o valor de X como 5, a função soma vai pegar o valor de X como 5 e o valor de Y fica como 1. Dai ela executa o Bloco e te da o retorno.


function multiplique(n1,n2,n3){
    const resul = n1 * n2 / n3;
    return `${n1} × ${n2} ÷ ${n3} é igual a: ${resul}`;
}

console.log(multiplique(5,5,2));
console.log("---------------------------------");
console.log(multiplique()); // -> Vai te retorna NaN porque tu não passou os argumentos para a função. Os argumentos não n1,n2,n3
console.log("---------------------------------");
console.log(multiplique(2)); // -> Aqui também vai receber NaN porque tu passou só um argumento. Dai n2 e n3 vai ficar como UNDEFINED, porque multiplicar um Number com um Undefined e depois dividir com outro um Undefined. Não é um numero.
console.log("---------------------------------");
                    // FUNÇÃO ANONIMA

/* Tu pode jogar uma funão dentro de uma variavel que é chamada de função anonima.
Por exemplo: */
 //               ↱ Aqui não precisa tu dar um nome a tua função! Poruqe é uma função anonima, não esqueca de passar para a função o parametro.
const raiz = function(n) {
    return "A raiz quadrada é : " + n**0.5; //-> Vai te mostrar a raiz quadrada do número

}; //-> Atenção no ponto e virgula, na função anonima tu precisa colocar ele no final, se não vai dá merda.

console.log(raiz(9));

                // ARROW FUNCTION

// Arrow function é uma forma mais moderna de se criar uma função, a função dela é a mesma da normal, porém com um jeito mais simples de fazer. Objetivo de facilitar mais a vida do programador na hora de fazer uma função.

//POR EXEMPLO: 

const raiz2 = function(n) {
    return "A raiz quadrada é : " + n**0.5; //-> Vai te mostrar a raiz quadrada do número

};  // ->  Esse é o exemplo com uma função normal. Mesmo exemplo anterior.

/* Com Arrow Function tu não precisa figita a palavra function ! Em vez do nome tu coloca: => que a chamam de função de seta*/

//            ↱ Quando tu tem só um parametro tu pode deixa ele sem o parenteses!
const raiz3 = n => n**0.5; 
console.log(raiz(100)); // -> Essa é a de função de cima so que com Arrow Function.
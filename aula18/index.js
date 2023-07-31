//      OBJETO (BÁSICO)   aula: 32
 
/*Em javascript voce pode criar os teus propios abjetos dessa forma.
Imagina que tu tenha alguma coisa assim: */

const nome01 = "Luiz";
const sobreNome01 = "Miranda";
const idade01 = 25;

// Dai tu precisa criar varias pessoas 

const nome02 = "Germano";
const sobreNome02 = "Manoel";
const idade02 = 20;

/* Se tu tivesse que criar 1000 pessoas tu teria que criar varias  e varias variaveis / constante para as 1000 pessoas. Dai claramente a gente ver que o nome01,sobrenome01 e idade01 são variaveis relacionadas elas estão relacionadas entre se / uma com a outra.

• Fica mais facil tu usando Objeto
    POR EXEMPLO:  */

const pessoa01 = { // -> Para objetos a gente usa chaves e com array a gente usa colchetes.
    nome:"Luiz",
    sobreNome:"Miranda", //Esse é um Array Lireral
    idade:25
};

const pessoa02 = {
    nome:"Germano", //OBS: Ver que fica mais fácil de tu fazer com Objeto do que tu ficar declarando const direto 
    sobreNome:"Manoel", 
    idade:20
};

// Para acessar o NOME da primeira pessoa por exemplo, tu pode fazer assim:

console.log(pessoa01); //-> Pega o objeto todo da primeira pessoa.
//console.log(pessoa01.nome); -> Vai pegar só o nome da primeira pessoa.
console.log("--------------------------------------------------");

/* • Tu pode criar uma função que crie esses objetos para tu
    POR EXEMPLO: */

 function criarPessoas(nome,sobrenome,idade){
    return{             // ↳ Chamamos isso de Parametro
        nome: nome,
        sobrenome: sobrenome, // -> Ou tu pode fazer só isso: return{nome, sobrenome, idade}; para simplificar.
        idade: idade
    };
 }
                            // ↱ Chamamos isso de argumento, argumento é o valor que passamos para parametro.
const pessoa1 = criarPessoas("Luiz","Miranda",25);
const pessoa2 = criarPessoas("Gemano","Manoel",20);
const pessoa3 = criarPessoas("Breno","Emanuel",12);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


/*• Alem disso, lembra que aquando uma função está detro de um objeto ela é chmada de metodo! Você pode ter funções dentro do objeto.
    POR EXEMPLO:  */

    const pessoa4 = {
        nome: "Germano",
        sobrenome: "Manoel",
        idade:20,

  // ↱ Não precisa da palavra function. 
        fala(){             // ↱ Significa : Nesse Objeto
            // console.log(`${this.nome} ${this.sobrenome} está falando algo...`);
            console.log( `A minha idade é: ${this.idade}.`);
        },

        incrementoIdade(){
            this.idade++
        }

    };

    pessoa4.fala(); //-> vai mostrar a frase do console.log, que esta dentro do objeto.
    pessoa4.incrementoIdade(); // -> Vai fazer o incremento de idade
    pessoa4.fala(); 

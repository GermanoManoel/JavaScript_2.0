// Array ( Básico )

const nome = ['Germano', 'Melo', 'Manoel'];
//                0        1        2      -> Os Array é indexado por elementos!
console.log(nome[2]); // -> Tem como tu pegar por elementos.
// console.log(nome); // -> Tem como tu pegar o Array todo.

// Você pode também editar o valor do array, por exemplo pegar o nome Germano que está no indice 0 e mudar pra outro nome, você pode fazer isso fazendo assim: 

nome[0] = 'Gilvaneide'; //-> Aqui tu tás alterando o nome 'Germano' por 'Gilvaneide'.

nome[3] = 'Severino'; // -> Aqui tu tás adicionando o nome 'Severino' no indice 3, Veja que não tem nada no teu indice 3 no Array a cima.

nome.push('Ronaldo'); // -> Uma forma mais facil de tu adicionar um elemento no teu Array sem precisar saber o tamanho dele. Aqui tu não precisa passar qual a posição que ele tem que ficar, porque o elemento que tu passar pra ele ele ja vai colocar no final do teu Array.

nome.unshift('Messi'); // -> Essa função .unshift() ela vai adicionar o elemento no teu array  antes do nome 'Gilvanede', O nome 'Messi' que tu adicionou antes ele vai passar a ser indice 0, o 'Gilvanede' indice 1, 'Melo' indice 2... O 'Messi que tu adicionou ele o primeiro indice que é 0 e a primeira colocação. Obs: Lembrando que a gente alterou o nome 'Germano' para 'Gilvaneide' no exemplo a cima. 

nome.pop(); // -> Vai remover o elemento final do Array. Veja que o nome 'Ronaldo' que adicionamos por ultimo vai sumir. Lembre-se que o nome 'Messi' a gente usou a função .unshift() para adicionar antes do primeiro elemento.

nome.shift(); // -> Esse é similar do .pop(), porém o .pop() remove do final do array, esse .shift() remove do começo. Agora sim o nome 'Messi' vai ser removido, porque a gente tinha adicionado ele no começo.

delete nome[1]; // -> Aqui tu vai deleta um elemento do teu array sem que os indices mude/altere. Dá pra fazer isso também! Dai o nome 'Gilvaneide' continua como 0, o 'Manoel' continua como 2 e o 'Severino' continua como 3. o 1 que é o 'Melo' tu deletou ele. Se tu colocar pra rodar tu vai ver que no lugar dele ficou: <1 empty item> ou seja "Um item vazio" traduzindo.

//                 ↱ O .slice() ele serve pra fatiar teu Array, a gente viu isso na parte de string, que também da pra fazer.             ↑
console.log(nome.slice(0, 3)); // -> Tu pode também usar o .length para saber o tamanho do teu Array.
                      //↳ Quando quiser fatiar o array, tu tem que passa dentro do .slice() de onde tu que começa até onde tu quer que ele vá, 0 é onde começa e 3 onde termina. tu executando ele vai até 'Manoel' só.

console.log(nome instanceof Array); //-> Aqui tu tas perguntando se a variavel nome é uma instancia de Array, se for ele te retorna true, se não for ele te retorna false.
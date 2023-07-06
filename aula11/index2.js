/*  INCREMENTO

• Vai ter muitos momentos que você vai querer fazer uma variavel contadora usando o incremento.
Por exemplo:
*/
let contadora = 1;
console.log(contadora++); // contadora++, é a mesma coisa de: contadora = contadora + 1

/* • A gente tem duas formas de incremento
1º contadora++ -> PÓS
2º ++contadora -> PRÉ

A diferença é que o PÓS ele primeiro vai ler o número,exibir na tela e depois fazer o incremento, dai se tu quiser ver o número incrementado tu vai ter que dá mais um console.log(contadora); por exemplo. 

Já o PRE ele faz primeiro o incremento e depois ler o número, dai quando ele te mostra ele vai te mostrar o número já incrementado sem tu precisar da outro console.log pra ver o resultado. */

// PÓS
let numero = 1;
console.log(numero++);
console.log(numero); // -> Observer que aqui pra ver o resultado 2, tu teve que da mais um console.log e chamar a variavel novamente.

// PRÉ
let num = 1 
console.log(++num); // Já nesse não foi necessario chamar mais um console.log para ver o resultado 2.

/* • DECREMENTO
Mesma linha de raciocinio, porém em vez de tu usar + tu vai usar - .
Por exemplo: */

let numero1 = 2
console.log(numero1--); 
console.log(numero1);
// ou console.log(--numero1); Esse não precisa tu repetir o console.log e chamar a variavel em baixo por causa que ele faz o incremento antes.


// Agora se caso tu fizer isso aqui:

var numero2 = 1;
numero2++
console.log(numero2); // Não importa se tu usar o ++ ou -- de todo jeito quando tu dá um console.log chamando a tua variavel, ela já vai te dá o número incrementado que o resultado vai ser 2. Porque tu fez o incremento antes de chamar o console.
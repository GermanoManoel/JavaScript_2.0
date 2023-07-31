// Continuação de IF, ELSE IF  E  ELSE        Aula:41

const numero = 12;

// Se isso ocorrer: (numero >= 0 && numero <= 10), faça isso { Código }
// Se não faça isso { Código }
if (numero >= 0 && numero <= 10) {
    console.log("O número está entre 0 e 10!");
} else if (numero > 10 && numero <= 15) {
    console.log("O número está entre 10 e 15!");
} else if ( numero >= 15 && numero <= 20){
    console.log("O  número está entre 15 e 20!");
} else {
    console.log("O número não está entre 0 e 20!");
}

if( 1 === 1){
    console.log("LITERAL");
}
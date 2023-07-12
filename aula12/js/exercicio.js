    //Exercicio De soma 
    let numero1 = prompt("Digite o primeiro número:"); 
    let numero2 = prompt("Digite o segundo número:");

    resultado = Number(numero1) + Number(numero2);
    alert(`O resultado de ${numero1} + ${numero2} é igual a: ${resultado}`);

    //Exercicio de Váriaveis
    let varA = 'A'; // -> B
    let varB = 'B'; // -> C
    let varC = 'C'; // -> A

    guardaA = varA; // -> Aqui tu tás guardando o valor de A para tu não perde ele, tu perde o valor de A quando tu diz: varA = varB.
    varA = varB; // A vai receber o valor de B 
    varB = varC; // B vai receber valor de C
    varC = guardaA; // C vai receber o valor de A
    
    //      OU
    // [varA, varB, varC] = [varB, varC, varA];
    
    console.log(varA, varB, varC);
    
  /*const varA = 'A'; // -> B
    const varB = 'B'; // -> C
    const varC = 'C'; // -> A

    let A = varB; // A vai receber o valor de B 
    let B = varC; // B vai receber valor de C
    let C = varA; // C vai receber o valor de A

    console.log(A,B,C)*/
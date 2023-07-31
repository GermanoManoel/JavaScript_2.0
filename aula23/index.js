/* 
 • Avaliação de Curto-Circuito (Short-Circuit);

 • && -> False && true == False

 Tu pode fazer uma avaliação de curto circuito que basicamente é quando tu tiver fazendo uma operação lógica com &&, o primeiro false que o JavaScript achar ele já vai te retorna false. Isso porque para dá true no && todos temque ser true. 

 Por exemplo:
*/
    console.log("Germano" && 0 && "Amanda");
/*  ↳ Vai te retorna 0 porque aparte do momento que o javascript encontrar a expressão END/&& vai ver que tem um valor que é avaliado em falsy.

 • Valores que avalião em falsy:
 false -> Valor literal
 0
 '' "" `` -> String mazia
 Null / Undefined
 NaN

 */

 //EXEMPLO 2:
  console.log("Germano" && true && "Amanda");
  /* ↳ Vai te retorna: Amanda 
      porque ele checa a primeira expressão que é true.
      a segunda (true) literalmente é verdadeira
      ai ele te retorna a ultima expressão que foi checado, que também é verdadeira.
  
    • Qualquer coisa diferente de:
    False, 0, ''(string vazia), null/undefined e NaN. É AVALIADO EM TRUE! 
  */

/*
 • || -> False || true == true

  Tu também pode fazer uma avaliação de curto circuito com operação lógica com ||, para ele te retorna o valor TRUE basta que um seja verdadeiro. O primeiro true que o JavaScript achar ele já vai te retorna true.

  Por Exemplo:
 */
  console.log("" || 0 || false || "Germano" || true);
  /* ↳ Vai te retorna Germano. Porque aparece do momento que o JS ele inicia e acha o primeiro true, que no caso é "Germano" ele te retorna o valor e para de executar e para a execução.

  Lembrando que:
    • Qualquer coisa diferente de:
    False, 0, ''(string vazia), null/undefined e NaN. É AVALIADO EM TRUE! 

  */


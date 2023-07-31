/* 
 • Operadores de comparação
> → Maior que
< → Menor que
>= → Maior ou igual que
<= → Menor ou igual
== → Igual (Valor) -> Checa só o valor
=== → Igualdade Estrita (Valor e tipo) -> Checa valor e o tipo se é string,number etc. (USE ESSE, EM VEZ DESSE: ==)
!= → Diferente (Valor) -> Checa só o valor
!== → Diferente Estrito (Valor e tipo) Checa valor e o tipo se é string,number etc. (USE ESSE, EM VEZ DESSE: !=)
*/
const num1 = 10;
const num2 = '10';
const comp = num1 !== num2;
console.log(comp); //-> Vai te retorna false, porque o operador === ele vai ver se os número são iguais e os tipos também. 
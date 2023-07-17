const numero = Number(prompt("Digite um número:"));
let numeroTitulo = document.getElementById("numeroTitulo");
let texto = document.getElementById("texto");

numeroTitulo.innerHTML= numero;
texto.innerHTML = '';
texto.innerHTML = `A raiz quadrada é: ${Math.sqrt(numero)} </br>`;
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} </br>`;
texto.innerHTML += `É NAN ? ${Number.isNaN(numero)} </br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}</br>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}</br>`;
texto.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}</br>`;


function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.getElementById("resultado_final");
    const pessoas = []; 
    
 
    form.addEventListener("submit", enviar);
        function enviar(evento) {
            evento.preventDefault();

            const nome = form.querySelector(".nome");
            const sobrenome = form.querySelector(".sobrenome");
            const idade = form.querySelector(".idade");
            const peso = form.querySelector(".peso");

            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                idade: idade.value,
                peso: peso.value
            });

            resultado.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Idade: ${idade.value}, peso: ${peso.value}</p>`;
        }
    
}

meuEscopo()

// let nome = document.getElementById("nome");
// let sobrenome = document.getElementById("sobrenome");
// let idade = document.getElementById("idade");
// let peso = document.getElementById("peso");
// let botaoEnter = document.getElementById("botao");


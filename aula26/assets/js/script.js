const form = document.getElementById("formulario");
form.addEventListener("submit", function(event) {
    event.preventDefault();
        const inputPeso = event.target.querySelector("#peso");
        const inputAltura = event.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

            if(!peso){
                resultado_na_tela("Peso inválido", false);
                    return;
            }

            if(!altura){
                resultado_na_tela("Altura inválida", false);
                    return;
            }

            const imc = getImc(peso, altura);
            const nivelImc = getNivelImc(imc);
            
            const msg = `Seu IMC é ${imc} (${nivelImc}).`;
          
            resultado_na_tela(msg, true);
});

function getNivelImc(imc) {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2","Obesidade grau 3"];

    if (imc >= 39.9){
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
         return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];  
    }
    if (imc >= 18.5) {
        return nivel[1];   
    }
    if (imc < 18.5)  {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const paragrafo = document.createElement("p");
        return paragrafo;
}

function resultado_na_tela(msg, isValid) {
    const resultado = document.querySelector("#resultadoFinal");
    resultado.innerHTML = '';

    const paragrafo = criaP();

    if(isValid) {
        paragrafo.classList.add("paragrafo-resultado");
    } else{
        paragrafo.classList.add("bad");
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}
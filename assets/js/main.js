//Captirar o evento de submit

function main() {
    const form = document.querySelector(".form");
    const resp = document.querySelector(".resposta");
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const pesoValido = validaDados(peso, "peso");
        const alturaValida = validaDados(altura, "altura");

        const imc = calculaIMC(pesoValido, alturaValida);
        respResultado(imc);
    });

    function validaDados(dado, valid) {
        const num = Number(dado.value);
        console.log(num, valid);
        if (!num) {
            if (valid === "peso") {
                console.log('sim');
                resp.innerHTML += "<p>Peso inválido</p>";
            } else {
                resp.innerHTML += "<p>Altura inválida</p>";
            }
        } else {
            resp.innerHTML = "";
            return num;
        }
    }
    function validaAltura() {
        console.log('valida altura');
    }
    function calculaIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }
    function respResultado(imc) {
        if (imc < 18.5) {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está abaixo do peso.</p>`;

        } else if (imc < 25) {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está com o peso normal.</p>`;

        } else if (imc < 30) {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está com sobrepeso</p>`;

        } else if (imc < 35) {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está com obesidade de grau 1.</p>`;

        } else if (imc < 40) {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está com obesidade de grau 2.</p>`;
        } else {
            resp.innerHTML += `<p>Seu IMC é ${imc} e você está com obesidade de grau 3.</p>`;
        }
    }
}

main();

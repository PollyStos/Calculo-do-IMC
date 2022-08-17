//Captirar o evento de submit

function main() {
    const form = document.querySelector(".form");
    const resp = document.querySelector(".resposta");
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        resp.innerHTML = "";

        const pesoValido = validaDados(peso, "peso");
        const alturaValida = validaDados(altura, "altura");
        
        if(pesoValido && alturaValida){
            const imc = calculaIMC(pesoValido, alturaValida);
            const msg = resultadoIMC(imc);
            mensagemDisplay(msg);
        }
    });
    
    function validaDados(dado, valid) {
        const num = Number(dado.value);
        
        if (!num) {
            const p = criaP();
            p.classList.add("bad");
            
            p.innerHTML = valid === "peso"? "Peso inválido": "Altura inválida";
            
            resp.appendChild(p);
            return;
        }
        return num;  
    }
    
    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function calculaIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function resultadoIMC(imc) {
        let msg = 'Seu IMC é ';
        const possiveisMsg = [' e você está abaixo do peso.', ' e você está com o peso normal.', ' e você está com sobrepeso', ' e você está com obesidade de grau 1.', ' e você está com obesidade de grau 2.', ' e você está com obesidade de grau 3.']
        if (imc < 18.5) {
            msg += imc + possiveisMsg[0];

        } else if (imc < 25) {
            msg += imc + possiveisMsg[1];
        } else if (imc < 30) {
            msg += imc + possiveisMsg[2];
        } else if (imc < 35) {
            msg += imc + possiveisMsg[3];
        } else if (imc < 40) {
            msg += imc + possiveisMsg[4];
        } else {
            msg += imc + possiveisMsg[5];
        }
        return msg;
    }
    
    function mensagemDisplay(msg){
        const p = criaP();
            p.classList.add("paragrafo-resposta");
            p.innerHTML =msg;            
            resp.appendChild(p);
    }
}
main();

(function trocaCor() {
    let botoes = document.getElementsByClassName("botao");
    let tela = document.getElementById("tela");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", (event) => {
            let computedStyle = window.getComputedStyle(event.target, null);
            let cor = computedStyle.backgroundColor;
            tela.style.backgroundColor = cor;
            tela.style.transition = '0.4s';
        });
    }
})();

let primeiraParte;
let segundaParte;
let operador;

function addText(text) {
    let texto = document.getElementById("boxText");

    if (text == "C") {
        texto.value = null;
        primeiraParte = null;
        segundaParte = null;
        operador = null;
    } else if(text != "=") {
        texto.value += text;
    }
    if(operador != null){
        segundaParte = texto.value.slice(primeiraParte.length);
    }
    if (text == "+" || text == "-" || text == "*" || text == "/") {
        primeiraParte = texto.value;
        operador = text;
    }
    if(text == "="){
        texto.value = calcula(operador, parseInt(primeiraParte), parseInt(segundaParte));
    }

}

function calcula(op, a, b) {
    switch (op) {

        case '+':
            return a + b;

        case '-':
            return a - b;

        case '*':
            return a * b;

        case '/':
            return a / b;

        default:
            break;
    }
}
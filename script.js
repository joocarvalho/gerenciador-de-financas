const telaInicial = document.getElementById("tela-inicial");
const saldoEntrada = document.getElementById("saldo-entrada");
const detalhamentoEntrada = document.getElementById("detalhamento-entrada");
const btnEntrada = document.getElementById("btn-entrada");
const saldoSaida = document.getElementById("saldo-saida");
const detalhamentoSaida = document.getElementById("detalhamento-saida");
const btnSaida = document.getElementById("btn-saida");
const saldoTotal = document.getElementById("saldo-total");
const telaEntrada = document.getElementById("tela-entrada");
const telaSaida = document.getElementById("tela-saida");
const valorEntrada = document.getElementById("valor-entrada");
const valorSaida = document.getElementById("valor-saida");
const campoDetEntrada = document.getElementById("campo-detalhamento-entrada");
const campoDetSaida = document.getElementById("campo-detalhamento-saida");
const btnAddEntrada = document.getElementById("btn-adicionar-entrada");
const btnAddSaida = document.getElementById("btn-adicionar-saida");

let totalEntrada = 0;
let totalSaida = 0;

function somarEntrada(){
    totalEntrada += Number(valorEntrada.value);
    return totalEntrada;
}

function somarSaida(){
    totalSaida += Number(valorSaida.value);
    return totalSaida;
}

function somarSaldo(){
    saldoTotal.textContent =
        `R$ ${(totalEntrada - totalSaida).toFixed(2)}`;
}

function detalEntrada(){
    return `+ R$ ${Number(valorEntrada.value).toFixed(2)} - ${campoDetEntrada.value}`;
}

function detalSaida(){
    return `- R$ ${Number(valorSaida.value).toFixed(2)} - ${campoDetSaida.value}`;
}

btnEntrada.addEventListener('click', () => {
    valorEntrada.value = "";
    campoDetEntrada.value = "";
    telaInicial.style.display = "none";
    telaEntrada.style.display = "flex";
});

btnSaida.addEventListener('click', () => {
    valorSaida.value = "";
    campoDetSaida.value = "";
    telaInicial.style.display = "none";
    telaSaida.style.display = "flex";
});

btnAddEntrada.addEventListener("click", () => {

    if (!campoDetEntrada.value.trim() || Number(valorEntrada.value) <= 0) {
        alert("Digite um valor e um detalhamento válidos.");
        return;
    };

    saldoEntrada.textContent = `R$ ${somarEntrada().toFixed(2)}`;
    detalhamentoEntrada.textContent = detalEntrada();
    somarSaldo();

    telaEntrada.style.display = "none";
    telaInicial.style.display = "flex";
});

btnAddSaida.addEventListener("click", () => {

    if (!campoDetSaida.value.trim() || Number(valorSaida.value) <= 0) {
        alert("Digite um valor e um detalhamento válidos.");
        return;
    };

    saldoSaida.textContent = `R$ ${somarSaida().toFixed(2)}`;
    detalhamentoSaida.textContent = detalSaida();
    somarSaldo();

    telaSaida.style.display = "none";
    telaInicial.style.display = "flex";
});

somarSaldo();
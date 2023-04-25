const formulario = document.getElementById("formulario-inputs");
let linhas = "";
let nomesCadastrados = [];
let numerosCadastrados = [];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    let inputNomeContato = document.getElementById("nome-contato");
    let inputDDDContato = document.getElementById("ddd-contato");
    let inputTelContato = document.getElementById("tel-contato");
    let inputNumeroContato = parseInt(`${inputDDDContato.value}${inputTelContato.value}`);
    console.log(inputNumeroContato);

    if (nomesCadastrados.includes(inputNomeContato.value)) {
        (alert(`O contato ${inputNomeContato.value} já foi cadastrado!`))
    }
    else if (numerosCadastrados.includes(inputNumeroContato)){
        (alert(`O número de telefone (${inputDDDContato.value}) ${inputTelContato.value.substring(0, 5)}-${inputTelContato.value.substring(5, 9)} já foi cadastrado!`))
    }
    else {
        nomesCadastrados.push(inputNomeContato.value);
        numerosCadastrados.push(inputNumeroContato);
        
        let linha = "<tr>";
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>(${inputDDDContato.value}) ${inputTelContato.value.substring(0, 5)}-${inputTelContato.value.substring(5, 9)}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputNomeContato.value = "";
    inputDDDContato.value = "";
    inputTelContato.value = "";
    inputNumeroContato = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}


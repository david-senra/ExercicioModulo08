const formulario = document.getElementById("formulario-inputs");
let linhas = "";
let nomesCadastrados = [];
let dddsCadastrados = [];
let telefonesCadastrados = [];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputDDDContato = document.getElementById("ddd-contato");
    const inputTelContato = document.getElementById("tel-contato");

    if (nomesCadastrados.includes(inputNomeContato.value)) {
        (alert(`O contato ${inputNomeContato.value} já foi cadastrado!`))
    }
    else if (telefonesCadastrados.includes(inputTelContato.value)){
        (alert(`O número de telefone ${inputTelContato.value} já foi cadastrado!`))
    }
    else {
        nomesCadastrados.push(inputNomeContato.value);
        telefonesCadastrados.push(parseFloat(inputTelContato.value));
        
        let linha = "<tr>";
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>(${inputDDDContato.value}) ${inputTelContato.value.slice(0,5)}-${inputTelContato.value.slice(5,9)}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputNomeContato.value = "";
    inputDDDContato.value = "";
    inputTelContato.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}


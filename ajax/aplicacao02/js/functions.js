function loadCustomers(idTable) {
    let xhttp = new XMLHttpRequest();
    let file = "https://github.com/tcgontijo/PFJS/blob/master/json/clientes.json";

    xhttp.onreadystatechange = () => {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            printCustomers(xhttp.responseText, idTable);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();

}

function printCustomers(clientes, idTable) {
    var clientes = JSON.parse();

    var tabela = document.getElementById(idTable);

    clientes.forEach(cliente => {
        let linha = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdIdade = document.createElement("td");
        tdNome.textContent = cliente.nome;
        tdIdade.textContent = cliente.idade;
        linha.appendChild(tdNome);
        linha.appendChild(tdIdade);
        tabela.appendChild(linha);
    });
}

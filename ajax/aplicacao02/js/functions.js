function loadCustomers() {
    let xhttp = new XMLHttpRequest();
    //let file = "https://tcgontijo.github.io/PFJS/ajax/aplicacao02/json/clientes.json";
    let file = "json/clientes.json"

    xhttp.onreadystatechange = () => {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            printCustomers(xhttp.responseText);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();

}

function printCustomers(clientes) {

    var Listaclientes = JSON.parse(clientes);
    var sel = document.getElementById("selCustomers").value;

    if (sel == "all") {
        montaTabela(Listaclientes.clientes);
        console.log(Listaclientes.clientes);
    }
    else if (sel == "M") {
        let ListaM = Listaclientes.clientes.filter(cliente => cliente.sexo == "M");
        montaTabela(ListaM);
    }
    else if (sel == "F") {
        let ListaF = Listaclientes.clientes.filter(cliente => cliente.sexo == "F");
        montaTabela(ListaF);
    }
}

function montaTabela(Lista) {

    var tabela = document.getElementById("tabCustomers");

    if (document.getElementById("tbody")) document.getElementById("tbody").parentNode.removeChild(document.getElementById("tbody"));

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");

    Lista.forEach(cliente => {
        let linha = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdIdade = document.createElement("td");
        tdNome.textContent = cliente.nome;
        tdIdade.textContent = cliente.idade;
        linha.appendChild(tdNome);
        linha.appendChild(tdIdade);
        tbody.appendChild(linha)
    });

    tabela.appendChild(tbody);
}
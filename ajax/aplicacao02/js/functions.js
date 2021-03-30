function loadCustomers(idTable) {
    let xhttp = new XMLHttpRequest();
<<<<<<< HEAD
    //let file = "https://tcgontijo.github.io/PFJS/ajax/aplicacao02/json/clientes.json";
    let file = "../json/clientes.json"
=======
    let file = "https://tcgontijo.github.io/PFJS/ajax/aplicacao02/json/clientes.json";

>>>>>>> 681e6c8b44c8c7498baa405dc6191ae491e05cfd
    xhttp.onreadystatechange = () => {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            printCustomers(xhttp.responseText, idTable);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();

}

function printCustomers(clientes, idTable) {
    console.log(clientes);
    var clientes = JSON.parse();
    console.log(clientes);

    var tabela = document.getElementById(idTable);

    clientes.clientes.forEach(cliente => {
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

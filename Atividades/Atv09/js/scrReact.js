
function ex1() {
    const helloWorld = <p>Hello, World!</p>;
    ReactDOM.render(helloWorld, $("#ex1")[0]);
}

function ex2() {
    const time = <p>{new Date().toLocaleTimeString()}</p>;
    ReactDOM.render(time, $("#ex2")[0]);
}

function ex3() {
    setInterval(() => {
        const element = <p>{new Date().toLocaleTimeString()}</p>;
        ReactDOM.render(element, $("#ex3")[0]);
    }, 1000);
}

function ex4() {
    let cont = 0;
    $("#btn4").click(function () {
        const element = <p>{cont++}</p>;
        ReactDOM.render(element, $("#ex4")[0]);
    })

}

function ex5() {
    let cont = 0;
    $("#btn5").click(function () {
        chrono = setInterval(() => {
            const element = <p>{cont++}</p>;
            ReactDOM.render(element, $("#ex5")[0]);
        }, 1000)
    });

}

function ex6() {
    $("#ok").click(function () {
        let nome = $("#nome").val();
        let largura = $("#largura").val();
        let altura = $("#altura").val();

        const element = (
            <div class="border border-5 border-dark bg-danger"
                style={{ width: largura + "px", height: altura + "px" }}>
                <p class="text-center text-light">{nome}</p>
            </div>
        );

        ReactDOM.render(element, $("#ex6")[0]);
    });
}
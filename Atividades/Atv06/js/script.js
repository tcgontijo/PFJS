$(function () {
    var cont = 0, contv = 0, srcImgAnterior = "", idDivAnterior = "", ocultados = [];

    $(".frente").hide();//Esconde as frentes das cartas
    $("#timer").hide();//Esconde o temporizador 

    $("#play").click(() => {
        $("#timer").show(); //Mostra o temporizador
        $("#timerMemo").html("5");//Inclui o tempo para memorização
        embaralhar();//Embaralha as cartas aleatoriamente
        timerMemorizar();//Inicia a contagem do tempo para memorizar
        $(".verso").hide();
        $(".frente").show();//Revela as cartas para memorização
    });

    function embaralhar() {
        srcImg1 = $("#img1A").attr("src");
        srcImg2 = $("#img2A").attr("src");
        srcImg3 = $("#img3A").attr("src");
        srcImg4 = $("#img4A").attr("src");
        srcImg5 = $("#img1B").attr("src");
        srcImg6 = $("#img2B").attr("src");
        srcImg7 = $("#img3B").attr("src");
        srcImg8 = $("#img4B").attr("src");

        srcImgs = [srcImg1, srcImg2, srcImg3, srcImg4, srcImg5, srcImg6, srcImg7, srcImg8];
        
        shuffleArray(srcImgs)

        function shuffleArray(array) {//método para embaralhar as cartas
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        srcImgs.forEach((src, i) => {//atribuição das imagens aleatoriamente
            $("#" + (i + 1) + " img").first().attr("src", src);
        });
    }
    function timerMemorizar() {
        var tempoParaIniciar = setInterval(function t() {
            tempo = Number($("#timerMemo").html());
            $("#timerMemo").html(tempo - 1);//decrementa o contador para memorização
            if ((tempo - 1) == 0) {
                clearInterval(tempoParaIniciar);
                $(".frente").hide();
                $(".verso").show();
                $("#timerMemo").html("VALENDO!");
                valendo();
            }
        }, 1000);
    }
    function valendo() {//habilita o clique sobre as cartas iniciando o jogo
        $(".carta").click(function () {
            var cartaAtual = $(this);
            var idDivAtual = cartaAtual.attr("id");
            var srcImgAtual = cartaAtual.find("img").first().attr("src");

            if (!ocultados.some((id) => id == idDivAtual)) {//somente executa se a carta não estiver ocultada
                if (cont == 0) {//primeira seleção
                    cartaAtual.find(".frente").show();
                    cartaAtual.find(".verso").hide();
                    srcImgAnterior = srcImgAtual;
                    idDivAnterior = idDivAtual;
                    cont++;
                } else if (srcImgAnterior != srcImgAtual) {//em caso de erro
                    cartaAtual.find(".frente").show();
                    cartaAtual.find(".verso").hide();
                    cont = 0;
                    $("#" + idDivAtual + " .frente").fadeOut("slow", () => $("#" + idDivAtual + " .verso").show()); 
                    $("#" + idDivAnterior + " .frente").fadeOut("slow", () => $("#" + idDivAnterior + " .verso").show());
                } else if (idDivAnterior != idDivAtual){//em caso de acerto
                    cartaAtual.find(".frente").show();
                    cartaAtual.find(".verso").hide();
                    cont = 0;
                    contv++;
                    $("#" + idDivAtual + " img").fadeOut();
                    $("#" + idDivAnterior + " img").fadeOut();
                    ocultados.push(idDivAtual);
                    ocultados.push(idDivAnterior);//Inclui cartas em vetor a ser desconsiderado quando clicado
                    setTimeout(() => {
                        if (contv == 4) {
                            alert("Parabéns! Você venceu!");
                            window.location.reload();
                        }
                    }, 500);
                }
            }
        });
    }


})
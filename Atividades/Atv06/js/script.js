$(function () {
    var cont = 0, contv = 0, srcImgAnterior = "", idDivAnterior = "", ocultados = [];

    $(".frente").hide();
    $("#timer").hide();

    $("#play").click(() => {
        $("#timer").show();
        $("#timerMemo").html("5");
        embaralhar();
        timerMemorizar();
        $(".verso").hide();
        $(".frente").show();
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
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        srcImgs.forEach((src, i) => {
            $("#" + (i + 1) + " img").first().attr("src", src);
        });
    }
    function timerMemorizar() {
        var tempoParaIniciar = setInterval(() => {
            tempo = Number($("#timerMemo").html());
            $("#timerMemo").html(tempo - 1);
            if ((tempo - 1) == 0) {
                clearInterval(tempoParaIniciar);
                $(".frente").hide();
                $(".verso").show();
                valendo();
            }
        }, 1000);
    }
    function valendo() {
        $(".carta").click(function () {
            var cartaAtual = $(this);
            var idDivAtual = cartaAtual.attr("id");
            var srcImgAtual = cartaAtual.find("img").first().attr("src");

            if (!ocultados.some((id) => id == idDivAtual)) {
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
                    $("#" + idDivAtual + " .frente").fadeOut("slow", function () { $("#" + idDivAtual + " .verso").show(); });
                    $("#" + idDivAnterior + " .frente").fadeOut("slow", function () { $("#" + idDivAnterior + " .verso").show(); });
                } else {//em caso de acerto
                    cartaAtual.find(".frente").show();
                    cartaAtual.find(".verso").hide();
                    cont = 0;
                    contv++;
                    $("#" + idDivAtual + " img").fadeOut();
                    $("#" + idDivAnterior + " img").fadeOut();
                    ocultados.push(idDivAtual);
                    ocultados.push(idDivAnterior);
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
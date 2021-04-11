$(function () {
    var cont = 0;
    var srcImgAnterior = "";
    var idDivAnterior = "";

    $(".frente").hide();
    $("#timer").hide();

    $("#play").click(function () {
        $("#timer").show();
    });

    $(".carta").click(function () {
        var cartaAtual = $(this);
        var idDivAtual = cartaAtual.attr("id");
        var srcImgAtual = cartaAtual.find("img").first().attr("src");

        if (cont < 1) {
            cartaAtual.find(".frente").show();
            cartaAtual.find(".verso").hide();
            srcImgAnterior = srcImgAtual;
            idDivAnterior = idDivAtual;
            cont++;
        } else if (srcImgAnterior != srcImgAtual) {
            cartaAtual.find(".verso").hide();
            cartaAtual.find(".frente").show();
            cont = 1;
            setTimeout(function () {
                $(".frente").hide();
                $(".verso").show();
            }, 1000);
        } else {
            setTimeout(function () {
            ("#" + idDivAtual + ", img").hide();
            ("#" + idDivAnterior + ", img").hide();
            cont = 1;
            },1000);
        }
    });


})
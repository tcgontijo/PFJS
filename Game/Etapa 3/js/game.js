const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100; //largura da topeira
const $imgHeight = 80; ///altura da topeira

$(document).ready(function () {
    fillBoard();
});

//Cria a moldura do tabuleiro conforme o nível de dificuldade
function fillBoard() {
    $level = $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({ "width": $boardWidth, "height": $boardHeight });
    placeHolesBoard($level);

}
//Insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>");
        $img = $("<img>").attr({"src":"img/buraco.gif", "id":`mole - ${$i + 1}`});
        $($div).append($img);
        $("#board").append($div);
    }

}
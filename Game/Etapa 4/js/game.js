const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100; //largura da topeira
const $imgHeight = 80; ///altura da topeira

$(document).ready(function () {
    fillBoard();
    $("#btnPlay").click(() => startGame());
});

//Cria a moldura do tabuleiro conforme o nível de dificuldade
function fillBoard() {
    $level = getLevel();
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
        $img = $("<img>").attr({ "src": "img/buraco.gif", "id": `mole_${$i + 1}` });
        $($div).append($img);
        $("#board").append($div);
    }

}

function startGame() {
    //$level = getLevel();
    $randNumber = getRandNumber(1, Math.pow(getLevel(), 2));
    $(`#mole_${$randNumber}`).attr("src", "img/toupeira.gif")

}

function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

function getLevel() {
    return $levels[$("#level").val()];
}
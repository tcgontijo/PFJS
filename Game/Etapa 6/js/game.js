const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100; //largura da topeira
const $imgHeight = 80; ///altura da topeira
const $imgsTheme = { "default": "buraco.gif", "active": "toupeira.gif", "dead": "morreu.gif" }

$(document).ready(function () {
    fillBoard();
    $("#btnPlay").click(function () {
        setInterval(startGame, 1180);
    });
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
        $img = $("<img>").attr({ "src": `img/${$imgsTheme.default}`, "id": `mole_${$i + 1}` });
        $($img).click(function () { updateScore(this) });
        $($div).append($img);
        $("#board").append($div);
    }

}

function updateScore($img) {
    if ($($img).attr("src").includes($imgsTheme.active)) {
        $("#score").text(Number($("#score").text()) + 1);
        $($img).attr("src", `img/${$imgsTheme.dead}`);
    }
}

function startGame() {
    fillBoard();
    $randNumber = getRandNumber(1, Math.pow(getLevel(), 2));
    $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.active}`);
}

function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

function getLevel() {
    return $levels[$("#level").val()];
}
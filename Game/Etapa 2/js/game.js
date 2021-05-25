const $levels = {"easy":3, "medium":5, "hard":7};
const $imgWidth = 100; //largura da topeira
const $imgHeight = 80; ///altura da topeira

$(document).ready(function() {
    fillBoard();

});

function fillBoard(){
    $level= $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({"width":$boardWidth, "height":$boardHeight});

}
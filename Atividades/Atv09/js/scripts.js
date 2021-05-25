$(function () {
    hideAll();

    $("#l1").click(() => {
        hideAll();
        ex1();
        $("#cx1").show("slow");
    })
    $("#l2").click(() => {
        hideAll();
        ex2();
        $("#cx2").show("slow");
    })
    $("#l3").click(() => {
        hideAll();
        ex3();
        $("#cx3").show("slow");
    })
    $("#l4").click(() => {
        hideAll();
        ex4();
        $("#cx4").show("slow");
    })
    $("#l5").click(() => {
        hideAll();
        ex5();
        $("#cx5").show("slow");
    })
    $("#l6").click(() => {
        hideAll();
        ex6();
        $("#cx6").show("slow");
    })
})

function hideAll() {
    for (i = 1; i <= 6; i++) {
        $(`#cx${i}`).hide();
    }
}





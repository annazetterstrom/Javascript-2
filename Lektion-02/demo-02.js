$(document).ready(function () {

    // Doubleclick
    $("#demo1").click(function () {
        $(this).hide();
    });
    $("#demo2").dblclick(function () {
        $(this).hide();
    });

    // Mouseout and Mouseenter
    $("#demo3").mouseenter(function () {
        $(this).html("Demo på mouseenter!");
    });
    $("#demo3").mouseout(function () {
        $(this).html("Demo på mouseout!");
    });

    // Mouseup and Mousedown
    $("#demo4").mousedown(function () {
        $(this).html("Demo på mousedown!");
    });
    $("#demo4").mouseup(function () {
        $(this).html("Demo på mouseup!");
    });

    // Hover
    $("#demo5").hover(inFunction, outFunction);

    function inFunction() {
        $(this).css("background-color", "yellow");
    }

    function outFunction() {
        $(this).css("background-color", "pink");
    }

    // Focus and Blur
    $("#demo6 input").focus(function () {
        $(this).css("background-color", "green");
    });
    $("input").blur(function () {
        $(this).css("background-color", "white");
    });

    // Metoden on()
    $("#demo7")
        .on("click", function () {
            $(this).html("Click har aktiverats");
    })
        .on("dblclick", function() {
            $(this).html("dblclick har aktiverats");
    });


}); //ready
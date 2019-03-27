$(document).ready(function () {

    // Lägga till eller ändra en CSS-egenskap
    $("#demo1").click(function () {
        $(".demo1").css("color", "blue");
    });

    // Lägga till eller ändra fleta CSS-egenskaper
    $("#demo2").click(function () {
        $(".demo2").css({
            "color": "white",
            "background-color": "#000",
            "font-size": "2em"
        });
    });

    // Hämta CSS-egenskap
    let $myColor = $('.demo').css('color');
    console.log($myColor);

    // Lägg till CSS-Klass
    $('#demo3').click(function () {
        $('.demo3').addClass('blue');

    })

    // Lägg till en Bootstrap-Klass
    $('#demo4').click(function () {
        $('.demo4').addClass('alert alert-success');
    })

    // Ta bort flera Bootstrap-Klasser
    $('#demo5').click(function () {
        $('.demo4').removeClass('alert alert-success');
    })

    // Växla flera Bootstrap-Klasser
    $('#demo6').click(function () {
        $('.demo4').toggleClass('alert alert-success');
    })

    // Växla klasser och ändra texten på knappen 
    $('#demo7').click(function () {
        $('.demo4').toggleClass('alert alert-success');

        // Ändra text
        // Ternary Operator
        ($('#demo7').text() === 'Lägg till klassen alert') ?
        $('#demo7').text('Ta bort klassen'):
            $(this).text('Lägg till klassen alert');

    // Ändra färg på knappen
    $(this).toggleClass('btn-danger');
    });

    //  Visa alla knappar med BS Klasserna btm och btn-primary
    $('button').addClass('btn btn-primary mb-1')

}); //ready
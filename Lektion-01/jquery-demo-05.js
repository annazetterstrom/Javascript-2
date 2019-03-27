// Manipulera inne med jQuery


$(document).ready(function () {
    
    // Metoden html()
    // Hämta html-kod
    let $demo = $('#demo1').html();
    console.log($demo);
    // Ändra html-kod
    $('#demo2').html('Hej från jQuery, html() metoden');

    // Metoden text()
    // Hämta text
    $demo = $('#demo3').text();
    console.log($demo);

    // Metoden val()
    // Hämta text so finns i input-fält
    $demo = $('#demo5').val();
    console.log($demo);

    // Metoden remove()
    $('#demo6').remove();

    // Metoden hide()
    $('#demo7').hide();

}); //ready
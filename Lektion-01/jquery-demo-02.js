// jQuery Selectors

$(document).ready(function(){

    // Type Selector
    // $('p').hide();

    // ID Selector
    $('#demo').hide();

    // Class Selector
    $('.demo').hide();

    // Universal Selector
    // $('*').hide();

    // Group of Selectors
    $('h4,h5, #group-demo, .group-demo').hide();

    // Descendant combinator (arv selector)
    // Väljer alla länkar som finns i alla listor
    $('li a').hide();
    // Väljer specifik lista 
    $('menu, a')

    // Child Combinators
    // Tar bort alla barnelement av typen p som finns direkt under div
    $('div > p').hide();

    // Sibling Combinators
    // Tar bort p som är direkt efter div (syskon) men inte p efter det
    $("div + p").hide();

    // Subsequent-sibling combinator
    $("article ~ p").hide(); 

    // This Selector
    $("p").click(function(){
        $(this).hide();
      }); 

}); // Avslutar ready
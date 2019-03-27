// Caching jQuery objects

$(document).ready(function(){
  
  // Caching innebär att skapa en referens till jQuery-objekt
  let $myListItems = $('li'); 
  console.log($myListItems) // Object
  console.log($myListItems.toArray()); // Object
  $myListItems.addClass('hot');

}); //Avslutar ready
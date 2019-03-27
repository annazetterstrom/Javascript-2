// Ajax Demo 5
/**
 * load - version 2.0
 * Funktionen load använder ajax
 * för att hämta data från en valfri url
 * i ett valfritt format (txt, xml, json)
 * @param url: sökväg till en resurs
 * @param callback: en funktion som exekveras när response skickas tillbaka  
 */

function load(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(this);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();

} // load

// Hämta btn 1 och lägg till ett klick-event
const btn = document.getElementById('btn');
btn.addEventListener('click', function (){
    load( 'https://cors.io/?http://api.namnapi.se/v2/names.json?limit=1' , demoCallback);
})

// En callback-funktion som anropas när en JSON-fil har skickats till webbläsaren
function demoCallback (xhr){

    // Referens till XMLHttpRequest-objektet
    console.log(xhr);

    let json = JSON.parse(xhr.responseText);
    let array = json.names;
    let name = array[0];
    console.log(name);
    document.getElementById('demo').innerText =
      name.firstname + ' ' + name.surname ;

}






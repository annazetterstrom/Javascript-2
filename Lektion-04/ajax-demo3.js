// Ajax Demo 3
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
    load('cd_catalog.xml' , demoCallback);
})

// En callback-funktion som anropas när en xml-fil har skickats till webbläsaren
function demoCallback (xhr){

    // Referens till XMLHttpRequest-objektet
    console.log(xhr);

  
    // Referens till XML-filen (response)
    let xml = xhr.responseXML; 
    console.log(xml);

    
    let title = xml.getElementsByTagName('TITLE');
    // OBS! Case Sensitive
    console.log(title);
    
    // title är en HTMLCollection aom liknar en array
    // Vi får iterera över collection
    // men vi får inte använda forEach
    // eller andra metoder som finns i arrayer
    let result = '<table>';
    for (let i = 0; i < title.length; i++) {
        console.log(title[i].textContent);
        result += '<tr> <td>' + title[i].textContent + '</td> </tr>'
    }
    result += '</table>';

    const demo = document.getElementById('demo');
    demo.innerHTML = result;
}






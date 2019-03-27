// Callback demo

// Exempel 1 från MDN

// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

function processUserInput(callback) {
    
    // Läs data från en prompt
    let name = prompt('Please enter your name.');
   
    // Anrop till en annan function som skickas in som argument till processUserInput
    callback(name);
  }

//   En funktion som visar en alert
function greetingAlert(name) {
    alert('Hello ' + name);
}

//   En funktion som skickar ett meddelande till console
function greetingConsole(name) {
    console.log('Hej' + name);
}

// Anropar 
// processUserInput(greetingAlert);
// processUserInput(greetingConsole);


// Exempel 2
// Synkorn (Synchronous) callback

console.log('Synkorn (Synchronous) callback')

let myArray = ['a', 'b', 'c'];

console.log('Start');
myArray.forEach(function (element){
    console.log(element);
})

console.log('Slut');

// Exempel 3
console.log('Asynkron (Asynchronous) callback');

console.log('Start');

setTimeout(function() {
    for (const element of myArray) {
      console.log(element);
    }
 }, 1000);
//  Vi går vidare till nästa sats och kommer tillbaka (Callback) efter 10 sek

 console.log('Slut');
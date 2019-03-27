// Ajax Demo
// Funktionen load - version 1.0

function load() {


    // Lite om XMLHttpRequest
    let xhr = new XMLHttpRequest();

    console.log(xhr)

    // Vi kör en callback vid en ändring i readyState
    /**
     * 	Holds the status of the XMLHttpRequest. 
    0: request not initialized 
    1: server connection established
    2: request received 
    3: processing request 
    4: request finished and response is ready
     */
    xhr.onreadystatechange = function () {

        console.log(this.readyState);
        console.log(this.status); // 200 == ok

        if (this.readyState === 4 && this.status === 200){

            // Här kan vi bearbeta 
            const demo1 = document.getElementById('demo1');
            demo1.innerHTML = 'TEST TEST'; 
        }
    }

    // Skicka en request (förfrågan) till en lokal server
    // Steg 1
    xhr.open('GET', 'demo1.txt', true);
    // OBS! true anger asykron
    
    // Steg 2
    xhr.send();

} // load

load();
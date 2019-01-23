var row;
var col;
var imageTotal;

//input&output
var rowInput = document.querySelector("#inputRow")
var colInput = document.querySelector("#inputCol")
var imageOutput = document.querySelector("#output")

//button
var btn = document.querySelector("button")

//method for button

btn.addEventListener("click", onMouseClick);

function onMouseClick(){
    row = parseInt(rowInput.value)
    col = parseInt(colInput.value)
    totalImage = row * col;
    i=0;
    while(i<totalImage){
        imageOutput.innerHTML = "repeat"
        i++;
    }  
    }
    
    <img src="https://loremflickr.com/320/240/dog"></img>
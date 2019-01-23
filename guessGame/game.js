//variables
var answer = Math.floor(Math.random()*10);
var guess;
var guessMade = 0;
var guessRemaining = 5;
var gameStatus;
var winner = false;

//input&output
var input1 = document.querySelector("#guessBox");
var output1 = document.querySelector("#output");

//button
var btn = document.querySelector("button");

//method to work button
btn.addEventListener("click",onMouseClick);

function onMouseClick(){
    guess = parseInt(input1.value);
    guessRemaining--;
    guessMade++;
    gameStatus = "you have " +guessRemaining + " guess remaining and made " + guessMade + " guess(es)"

    if(guess > answer) {
        output1.innerHTML = "Guess lower, " + gameStatus 
        if(guessRemaining < 1){
            gameEnd();
        }
    } else if (guess < answer) {
        output1.innerHTML = "Guess higher, " + gameStatus
        if(guessRemaining < 1){
            gameEnd();
        }
    } else if (guess === answer){
       winner = true;
       gameEnd();
    }
}

//Display when number of attempts is 0 or guessed correct number
function gameEnd(){
    if(winner){
        output1.innerHTML = "Correct!!!"
    } else {
        output1.innerHTML = "The number was " + answer
    }
}
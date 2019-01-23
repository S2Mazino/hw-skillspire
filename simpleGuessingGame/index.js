var guess;
var answer = 7


var guess = prompt("Guess between 1-10")

function guessGame(){
    if(guess == answer){
        prompt("Correct, you got it");
    }else if(guess != answer){
        prompt("guess again");
        guessGame();
    }else prompt("enter a number");
};

guessGame();
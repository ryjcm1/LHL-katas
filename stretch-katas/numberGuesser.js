let prompt = require("prompt-sync")();

//generates random number 1-100
const generatedNumber = Math.floor(Math.random() * 100) + 1;

//game status
let gameOn = true;

let guessCounter = 0;


while(gameOn === true){
    let answer = prompt("Guess a number between 1-100: ");
    guessCounter ++

    //exta condition to break out of the game
    if(answer === 'quit'){
        gameOn = false
        break;
    }

    //answering conditions
    if(isNaN(answer)){
        console.log(`That's not a number.`)

    }else if(answer > generatedNumber){
        console.log('Too high!')

    }else if(answer < generatedNumber){
        console.log('Too low!')

    }else if(answer == generatedNumber){
        console.log(`You got it! You took ${guessCounter} attempt(s)!`)
        gameOn = false;
        break;

    }
    

}



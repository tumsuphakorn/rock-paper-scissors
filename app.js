function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }
}

function playerPlay() {
    let playerChoice = prompt("Your turn: rock, paper or scissors?").toLowerCase();
    let errCheck = true;
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" ) errCheck = false;
    
    while (errCheck) {
      playerChoice = prompt("Please choose again: rock, paper or scissors?").toLowerCase();
      if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" ) errCheck = false;
    }
    return playerChoice;
}

function playRound() {
    let computer = computerPlay();
    let player = playerPlay();
    if (computer === player) {
        console.log("DRAW.");
    } else if (computer === "rock" && player === "paper") {
        console.log("YOU WIN.");
        playerScores+=1;
    } else if (computer === "rock" && player === "scissors") {
        console.log("COMPUTER WINS.");
        computerScores+=1;
    } else if (computer === "paper" && player === "scissors") {
        console.log("YOU WIN.");
        playerScores+=1;
    } else if (computer === "paper" && player === "rock") {
        console.log("COMPUTERS WINS.");
        computerScores+=1;
    } else if (computer === "scissors" && player === "rock") {
        console.log("YOU WIN.");
        playerScores+=1;
    } else if (computer === "scissors" && player === "paper") {
        console.log("COMPUTERS WINS.");
        computerScores+=1;
    }
    
}

function game() {
    
    while (playerScores < 5 && computerScores < 5) {
        playRound();
        console.log(playerScores, computerScores);
    }
    if (playerScores === 5){
        console.log("CONGRATULATION! YOU WIN 5 GAMES.");
        playerScores = 0;
        computerScores =0;
    } else if (computerScores === 5) {
        console.log("GAME OVER.");
        playerScores = 0;
        computerScores =0;
    }
}

let playerScores = 0;
let computerScores = 0;
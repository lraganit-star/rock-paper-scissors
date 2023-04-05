const prompt = require("prompt-sync")({sigint: true});
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    const userChoice = playerSelection.toLowerCase()
    console.log(computerSelection)
    const choices = [['rock','scissors'],
                        ['scissors', 'paper'],
                        ['paper', 'rock']];
    
    if (userChoice === computerSelection) {
        return "It's a tie";
    }

    for (i = 0; i < choices.length; i++) {
        console.log(choices[i])
        if (userChoice == choices[i][0] && computerSelection != choices[i][1]) {
            return `You lose! ${computerSelection} beats ${userChoice}`;
        }
    }
    return `You win! ${userChoice} beats ${computerSelection}`;
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    while (userScore + computerScore < 5) {
        const userChoice = prompt("Choose: rock, paper, or scissors: ");
        let outcome = playRound(userChoice);
         console.log(outcome)
         if (outcome.includes("win")) {
            userScore++
         }
         else if (outcome.includes("lose")) {
            computerScore++
         }
         console.log(`Score\nUser: ${userScore}\nComputer: ${computerScore}`)
    }
}

console.log(game())
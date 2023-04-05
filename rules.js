function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function letsPlay(playerSelection = "scissors", computerSelection = getComputerChoice()) {
    const userChoice = playerSelection.toLowerCase()
    console.log(computerSelection)
    const choices = [['rock','scissors'],
                        ['scissors', 'paper'],
                        ['paper', 'rock']]
    
    if (userChoice === computerSelection) {
        return "It's a tie"
    }

    for (i = 0; i < choices.length; i++) {
        console.log(choices[i])
        if (userChoice == choices[i][0] && computerSelection != choices[i][1]) {
            return `You Lose! ${computerSelection} beats ${userChoice}`
            
        }
    }
    return `You win! ${userChoice} beats ${computerSelection}`
}

console.log(letsPlay())
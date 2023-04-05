function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function letsPlay(playerSelection = "rOck", computerSelection = getComputerChoice()) {
    const userChoice = playerSelection.toLowerCase()
    const choices = [['rock','scissors'],
                        ['scissors', 'paper'],
                        ['paper', 'rock']]
    if (userChoice === computerSelection) {
        return "It's a tie"
    }
    return "Not a tie"
}

console.log(letsPlay())
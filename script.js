let playerPoint = 0;
let computerPoint = 0;

let choice = ["rock", "paper", "scissor"];



function getPlayerSelection() {
    let validInput = false;
    while (validInput == false) {
        const playerChoice = prompt("rock, paper or scissor?").toLowerCase();
        if (playerChoice == null){
            continue
        }
        if (choice.includes(playerChoice)) {
            validInput = true ;
            return playerChoice
        }
    }
}



function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice
    
}

function playRound(playerSelection, computerSelection) {
    
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
        ) {
            computerPoint++
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection === computerSelection) {
            return "it's a tie"
        } else {
            playerPoint++
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        
    }
    
    function game() {
        for (let i = 0; i < 5; i++){
            const playerSelection = getPlayerSelection();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            console.log(playerPoint);
            console.log(computerPoint);
        }

    }

    game()
    








    





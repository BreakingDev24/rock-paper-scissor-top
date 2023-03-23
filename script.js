const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();
let playerPoint = 0;
let computerPoint = 0;


function getPlayerSelection() {
    let selectionP = prompt("rock, paper or scissor?",).toLowerCase()
    return selectionP
}



function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice
    
}

function playRound(playerSelection, computerSelection) {

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
        ) {
            computerPoint++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection === computerSelection) {
            return "it's a tie"
        } else {
            playerPoint++
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        
    }




    





let playerPoint = 0;
let computerPoint = 0;
let playerChoice;

let choice = ["rock", "paper", "scissor"];

const playerSelectionContainer = document.getElementById('player-selection-container')
const playerSelectionBtn = document.querySelectorAll('.player-selection-btn');
const playerPointDisplay = document.getElementById('player-point-display');
const computerPointDisplay = document.getElementById('computer-point-display');
const roundResult = document.getElementById('round-result');
const playerWeapon = document.getElementById('player-weapon');
const computerWeapon = document.getElementById('computer-weapon');

playerSelectionBtn.forEach(button => {
    button.addEventListener('click', getPlayerSelection)
})

function getPlayerSelection(e) {
    let target = e.target;
    playerChoice = target.value
    playerSelectionContainer.innerText = playerChoice;
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
            computerPointDisplay.innerText = `Computer: ${computerPoint}`
            round = `You Lose! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection === computerSelection) {
            round = "it's a tie"
        } else {
            playerPoint++
            playerPointDisplay.innerText = `Player: ${playerPoint}`
            round = `You Win! ${playerSelection} beats ${computerSelection}`
        }
        roundResult.innerText = round
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



    







    





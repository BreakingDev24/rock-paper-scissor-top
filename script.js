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
    let target = (e.target);
    playerChoice = target.value
    playerWeapon.innerText = playerChoice;
    playRound(playerChoice, getComputerChoice())
}



function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    computerWeapon.innerText = computerChoice
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
        checkWinner(playerPoint, computerPoint)
    }

    function checkWinner(playerPoint, computerPoint){
        if (playerPoint === 5 || computerPoint === 5){
            endGame()
        }
    }

    function endGame(){
        playerSelectionBtn.forEach(button => {
            button.removeEventListener('click', getPlayerSelection)
        })
    }


    




    







    





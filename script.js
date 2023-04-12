let playerPoint = 0;
let computerPoint = 0;
let playerChoice;

let choice = ["rock", "paper", "scissor"];

const playerSelectionContainer = document.getElementById('player-selection-container')
const playerSelectionBtn = document.querySelectorAll('.player-selection-btn');
// const playAgainBtn = document.getElementById('play-again-btn')
const buttonContainer = document.getElementById('button-container')
const playerPointDisplay = document.getElementById('player-point-display');
const computerPointDisplay = document.getElementById('computer-point-display');
const roundResult = document.getElementById('round-result');
const playerWeapon = document.getElementById('player-weapon');
const computerWeapon = document.getElementById('computer-weapon');
let weaponPlaceholder = document.querySelectorAll('.weapon-placeholder')

playerSelectionBtn.forEach(button => {
    button.addEventListener('click', getPlayerSelection)
})

function getPlayerSelection(e) {
    let target = (e.target);
    playerChoice = target.value
    switch (playerChoice){
        case 'rock':
            weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/charmander.png"
            break;
        case 'paper': 
            weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png"
            break;
            
        case 'scissor':
            weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/squirtle.png"
        }
 
    playRound(playerChoice, getComputerChoice())
}


function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    switch (computerChoice){
        case 'rock':
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/charmander.png"
            break;
        case 'paper': 
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/squirtle.png"
        break;
        case 'scissor':
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png"
            break
        }
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
        createNewElement('wrapper', 'button', 'play-again-btn', 'play-again-btn', 'Play Again');
        document.getElementById('play-again-btn').addEventListener('click', reloadPage)
    }
    
    
    function createNewElement(parent, tagHtml, className, idName, content) {
        const parentElement = document.getElementById(parent);//define parent node
        const newElement = document.createElement(tagHtml);//create element using tag html
        
        newElement.classList.add(className);//add class to element
        newElement.setAttribute('id', idName);//add id to element
        newElement.innerText = content; //add content
        
        parentElement.appendChild(newElement)//insert element in dom
    }
    
    function reloadPage (){
        window.location.reload()
    }


    




    







    





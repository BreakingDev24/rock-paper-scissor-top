let playerPoint = 0;
let computerPoint = 0;
let playerChoice;

let choice = ["grass", "fire", "water"];

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




function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    switch (computerChoice){
        case 'fire':
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/charmander.png"
            break;
        case 'water': 
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/squirtle.png"
        break;
        case 'grass':
            weaponPlaceholder[1].src = "https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png"
            break
        }
    return computerChoice
    
}

function playRound(playerSelection, computerSelection) {
    
    if (
        (playerSelection === "fire" && computerSelection === "water") ||
        (playerSelection === "water" && computerSelection === "grass") ||
        (playerSelection === "grass" && computerSelection === "fire")
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
            endGame();
            if (playerPoint > computerPoint){
                document.getElementById('game-result-display').textContent = "You Win!"
            } else {
                document.getElementById('game-result-display').textContent = "You Lose!"
            }
        }
    }
    
    function endGame(){
        playerSelectionBtn.forEach(button => {
            button.removeEventListener('click', getPlayerSelection)
        })
        createNewElement('wrapper', 'div', 'game-result-container', 'game-result-container', '');
        createNewElement('game-result-container', 'p', 'game-result-display', 'game-result-display', '');
        createNewElement('game-result-container', 'button', 'play-again-btn', 'play-again-btn', 'Play Again');
        document.getElementById('play-again-btn').addEventListener('click', reloadPage);
    }
    
        
    function reloadPage (){
        window.location.reload()
    }

    function getPlayerSelection(e) {
        let target = (e.target);
        playerChoice = target.value
        switch (playerChoice){
            case 'grass':
                weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png"
                break;
            case 'fire': 
                weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/charmander.png"
            break;
            
            case 'water':
                weaponPlaceholder[0].src = "https://img.pokemondb.net/sprites/silver/normal/squirtle.png"
                break
            }
     
        playRound(playerChoice, getComputerChoice())
    }

    function createNewElement(parent, tagHtml, className, idName, content) {
        const parentElement = document.getElementById(parent);//define parent node
        const newElement = document.createElement(tagHtml);//create element using tag html
        
        newElement.classList.add(className);//add class to element
        newElement.setAttribute('id', idName);//add id to element
        newElement.innerText = content; //add content
        
        parentElement.appendChild(newElement)//insert element in dom
    }


    




    







    





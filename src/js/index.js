let rockBtn = document.querySelector('.buttons #rock');
let paperBtn = document.querySelector('.buttons #paper');
let scissorsBtn = document.querySelector('.buttons #scissors');
let resetBtn = document.querySelector('#reset');
let winner = document.querySelector('#winner');
let log = document.querySelector('#logs')
let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');
let data = document.querySelector('.results');

const score = {
        playerScore: 0,
        computerScore: 0,
        gameLimit: 5,
        winner: ""
}

//get the computer choice
function getComputerChoice() {
    let available = ["rock", "paper", "scissors"];
    return available[Math.floor(Math.random() * available.length)];
}

//function choosing the winner
function playRound(playerSelection, computerSelection){
    let status;
    if(playerSelection == computerSelection) {
        status = "It's Draw!";
    } else if (playerSelection == "rock"){
        status = (computerSelection == "paper") ? "You lose, Paper beats Rock!" : "You win!";
    } else if (playerSelection == "paper"){
        status = (computerSelection == "scissors") ? "You lose, Scissors beats Paper!" : "You win!";
    } else if (playerSelection == "scissors"){
        status = (computerSelection == "rock") ? "You lose, Rock beats Scissors!" : "You win!";
    } else {
        status = "error";
    }
    return status;
}

//playGame function, accepts only playerSelection parameter
function playGame(playerSelection) {
    if((score.playerScore < score.gameLimit && score.computerScore < score.gameLimit)){
        const computerSelection = getComputerChoice(); //generate computer choice
        const result = playRound(playerSelection, computerSelection);    
        if(result == "You win!"){
            pScore.textContent = ++score.playerScore;
            log.textContent = result;
        } else if(result == "It's Draw!") {
            log.textContent = result;
        } else {
            cScore.textContent = ++score.computerScore;
            log.textContent = result;
        }
        if(score.playerScore == 5 || score.computerScore == 5){
            score.winner = (score.playerScore > score.computerScore) ? "Well done, you beat the computer!" : "Computer Wins!";
            if(score.playerScore == score.computerScore){
                score.winner = "Draw!";
            }
            winner.textContent = score.winner;
        }
    } else {
        winner.textContent = "Click the New Game button to start a new game!";
    }
}

function reset(){
    score.playerScore = 0;
    score.computerScore = 0;
    score.winner = "";
    winner.textContent = "Choose your weapon";
    logs.textContent = "Match information will be displayed here.";
    pScore.textContent = 0;
    cScore.textContent = 0;
}


rockBtn.addEventListener('click', () => {
    playGame("rock");
});

paperBtn.addEventListener('click', () => {
    playGame("paper");
});

scissorsBtn.addEventListener('click', () => {
    playGame("scissors");
});

resetBtn.addEventListener('click', () => {
    reset();
})
//get the computer choice
function getComputerChoice() {
    let available = ["rock", "paper", "scrissors"];
    return available[Math.floor(Math.random() * available.length)];
}
//function choosing the winner
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let status;
    if(computerSelection == playerSelection) {
        status = "It's Draw!";
    } else if (computerSelection == "rock"){
        status = (playerSelection == "scrissors") ? "You lose, Rock beats Scrissors!" : "You win!";
    } else if (computerSelection == "paper"){
        status = (playerSelection == "rock") ? "You lose, Paper beats Rock!" : "You win!";
    } else if (computerSelection == "scrissors"){
        status = (playerSelection == "paper") ? "You lose, Scrissors beats Paper!" : "You win!";
    } else {
        status = "error";
    }
    return status;
}

function game(){
    for(let i = 1; i<=5; i++){
        const playerSelection = prompt("Rock, Paper or Scrissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();
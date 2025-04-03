let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else if (choice === 3) {
        return "scissors";
    }
}

//Set up variable for user input.
//Prompt user for choice (Rock, Paper, or Scissors) and store it in variable.
//Return Variable
function getHumanChoice(){
    let choice;
    choice = prompt("Rock, Paper, Scissors?");
    return choice.toLowerCase();
}

const scoreBoard = document.getElementById("score");
scoreBoard.setAttribute('style', 'white-space: pre;');
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
    }
    scoreBoard.textContent = "Player: " + humanChoice + "\r\tComputer: " + computerChoice +
    "\r\nPlayer Score: " + humanScore + "\r\tComputer Score: " + computerScore;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 && computerScore !== 5) {
        scoreBoard.textContent += "\r\nCongratulations, you win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore !== 5 && computerScore === 5) {
        scoreBoard.textContent += "\r\nSorry, you lost!";
        humanScore = 0;
        computerScore = 0;
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
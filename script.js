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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Lose!");
        computerScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Win!");
        humanScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("Tie!");
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("Tie!");
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Lose!");
        computerScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Win!");
        humanScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Win!");
        humanScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("Tie!");
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Player: " + humanChoice + "\nComputer: " + computerChoice);
        console.log("You Lose!");
        computerScore++;
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
    }
}

function playGame() {
    let computerChoice;
    let humanChoice;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You Win!");
    }
    
    else if (computerScore > humanScore) {
        console.log("Too bad, You lose!")
    }
    else if (computerScore === humanScore) {
        console.log("It's a tie!");
    }
}

playGame();
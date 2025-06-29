console.log("hello wall!");

let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randNum];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper', or 'scissors'!");
    humanChoice = humanChoice.trim().toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceGame = getComputerChoice();
    const computerChoiceGame = getHumanChoice();

    if (humanChoiceGame === computerChoiceGame) {
        alert("Tie! No points awarded");
    }
}

playRound();
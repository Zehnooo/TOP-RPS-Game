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
  
    if (humanChoice === computerChoice) {
        alert("Tie! No points awarded");
          console.log(
            "player choice was: " + humanChoice + " " +
            "computer choice was: " + computerChoice
        );
    }

    // Player Wins
    if ((humanChoice === 'rock' && computerChoice === 'scissors')||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log("Congrats! Player wins!");
        console.log(
            "player choice was: " + humanChoice + " " +
            "computer choice was: " + computerChoice
        );
    }
    
    // Player loses
     if ((humanChoice === 'scissors' && computerChoice === 'rock')||
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors')){
        console.log("Nice try! Player loses!");
        console.log(
            "player choice was: " + humanChoice + " " +
            "computer choice was: " + computerChoice
        );
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
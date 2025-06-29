let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

function showScoreUpdate() {
  console.log(
    "Round completed! The new scores are: \n User Score: " +
      playerScore +
      " " +
      "Computer score: " +
      computerScore +
      "."
  );
}

function resetGame() {
  let playAgain = confirm("Play again?");
  if (playAgain) {
    playerScore = 0;
    computerScore = 0;
    playGame();
  } else {
    alert("Thanks for playing :)");
  }
}

function showPlayerLose(humanChoice, computerChoice) {
  console.log("Nice try! User loses!");
  console.log(
    "user choice was: " +
      humanChoice +
      " " +
      "computer choice was: " +
      computerChoice
  );
}

function showPlayerWin(humanChoice, computerChoice) {
  console.log("Congrats! User wins!");
  console.log(
    "user choice was: " +
      humanChoice +
      " " +
      "computer choice was: " +
      computerChoice
  );
}

function showGameOver() {
  console.log("Game Over!");
  if (playerScore === 5) {
    console.log("Congrats! User won the game!");
  } else {
    console.log("Better luck next time! Computer won the game.");
  }
}

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  const computerChoice = choices[randNum];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter 'rock', 'paper', or 'scissors'!");
  if (!humanChoice) {
    return;
  }
  humanChoice = humanChoice.trim().toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // Tie round
  if (humanChoice === computerChoice) {
    alert("Tie! No points awarded");
    console.log(
      "player choice was: " +
        humanChoice +
        " " +
        "computer choice was: " +
        computerChoice
    );
  }

  // Player Wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    showPlayerWin(humanChoice, computerChoice);
    playerScore++;
    showScoreUpdate();
  }

  // Player loses
  if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    showPlayerLose(humanChoice, computerChoice);
    computerScore++;
    showScoreUpdate();
  }
}

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  showGameOver();
  resetGame();
}

playGame();

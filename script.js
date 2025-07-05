window.addEventListener("DOMContentLoaded", () => {
  body = document.querySelector("body");
  body.style.opacity = "1";
});

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let roundNum = 0;
let tieCount = 0;
let resetBtn;

const gameButtonsDiv = document.querySelector(".game-choices");
let gameButtons = gameButtonsDiv.querySelectorAll("button");

const scoreBoard = document.querySelector(".scoreboard");
let scoreNums = scoreBoard.querySelectorAll("span");

const gameResults = document.querySelector(".game-results");
let gameResultNums = gameResults.querySelectorAll("span");
let gameResultText = gameResults.querySelector("p");

let matchResultText = document.querySelector(".result-text");

console.log("Script is running");

function showScoreUpdate() {
  scoreNums[0].textContent = playerScore;
  scoreNums[1].textContent = roundNum;
  scoreNums[2].textContent = computerScore;
}

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  const computerChoice = choices[randNum];
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  roundNum++;
  // Tie round
  if (humanChoice === computerChoice) {
    tieCount++;
    result = "tie";
  } else if (
    // Player Wins
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    result = "playerWins";
  } else if (
    // Player loses
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    result = "computerWins";
  }
  updateGameResult(result);
  showScoreUpdate();

  if (roundNum === 5) {
    announceWinner(playerScore, computerScore);
    endGame();
  }
}

for (const btn of gameButtons) {
  btn.addEventListener("click", () => {
    humanChoice = btn.value;
    humanChoice = humanChoice.toLowerCase();

    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
}

let updateGameResult = (result) => {
  if (result === "tie") {
    gameResultNums[0].textContent = `Round ${roundNum} is a tie! Both players chose ${humanChoice}. Tie counter is at ${tieCount}.`;
  } else if (result === "playerWins") {
    gameResultNums[0].textContent = `Player wins round ${roundNum}! Player chose ${humanChoice} and Computer chose ${computerChoice}.`;
    scoreNums[0].parentElement.classList.add("round-winner");
    setTimeout(() => {
      scoreNums[0].parentElement.classList.remove("round-winner");
    }, 3000);
  } else if (result === "computerWins") {
    gameResultNums[0].textContent = `Computer wins round ${roundNum}! Player chose ${humanChoice} and Computer chose ${computerChoice}.`;
    scoreNums[2].parentElement.classList.add("round-winner");
    setTimeout(() => {
      scoreNums[2].parentElement.classList.remove("round-winner");
    }, 3000);
  }
};

function announceWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    matchResultText.textContent = `Game Over! Both players tied!`;
  } else if (playerScore > computerScore) {
    matchResultText.textContent = `Game Over! Player defeated the computer.`;
    matchResultText.classList.add("game-win");
  } else {
    matchResultText.textContent = `Game Over! Computer defeated the player.`;
    matchResultText.classList.add("game-lose");
  }
}

function endGame() {
  for (const btn of gameButtons) {
    btn.style.display = "none";
  }

  const resetBtn = document.createElement("button");
  resetBtn.id = "reset-btn";
  resetBtn.classList.add("reset-btn");
  resetBtn.textContent = "PLAY AGAIN";
  resetBtn.addEventListener("click", resetGame);
  gameButtonsDiv.appendChild(resetBtn);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundNum = 0;
  tieCount = 0;

  for (const btn of gameButtons) {
    btn.style.display = "";
  }
  document.querySelector("#reset-btn").remove();

  matchResultText.textContent = "";
  if (matchResultText.classList.length > 1) {
    matchResultText.classList.remove("game-win");
    matchResultText.classList.remove("game-lose");
  }
  gameResultNums[0].textContent = "";
  scoreNums[0].textContent = "0";
  scoreNums[1].textContent = "0";
  scoreNums[2].textContent = "0";
}

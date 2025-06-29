console.log("hello wall!");

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randNum];
    console.log(computerChoice);
}

getComputerChoice();
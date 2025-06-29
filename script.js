console.log("hello wall!");

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randNum];
    console.log(computerChoice);
}

getComputerChoice();
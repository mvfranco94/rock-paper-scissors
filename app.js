const options = ["rock", "paper", "scissors"];

let humanChoice;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const randomOption = Math.floor(Math.random() * 3);

  return options[randomOption];
}

function getHumanChoice() {
  humanChoice = +prompt("Get an option\n 0 - Rock\n 1 - Paper\n 2 - Scissors");
}

getHumanChoice();

console.log(humanChoice);
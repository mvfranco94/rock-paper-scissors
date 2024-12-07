const options = ["rock", "paper", "scissors"];

let playerChoice = null;

function getComputerChoice() {
  const randomOption = Math.floor(Math.random() * 3);

  return options[randomOption];
}

function getHumanChoice() {
  playerChoice = +prompt("Get an option\n 0 - Rock\n 1 - Paper\n 2 - Scissors");
}

getHumanChoice();

console.log(playerChoice);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // set randomNumber to a number between
  // 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock"
  }
  else if (randomNumber === 1) {
    return "paper"
  }
  else {
    return "scissors"
  }

}

function getHumanChoice() {
  const choice = prompt("Choose between rock, paper or scissors:");
  return choice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());
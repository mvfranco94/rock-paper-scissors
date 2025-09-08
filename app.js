let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

console.log("humanChoice: ", humanChoice);
console.log("humanScore: ", humanScore);
console.log("computerChoice: ", computerChoice);
console.log("computerScore: ", computerScore);

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a draw.");
    return;
  }
  else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
      computerScore++;
    }
    else {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
      humanScore++;
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    else {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
      computerScore++;
    }
    else {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
      humanScore++;
    }
  }
}

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


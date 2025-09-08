let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    console.log(`human ${humanScore} x ${computerScore} computer`);
  }

  if (humanScore > computerScore) {
    console.log("The winner was YOU! Congratulations!");
  }
  else if (humanScore < computerScore) {
    console.log("The winner was the COMPUTER! Sorry, try again!");
  }
  else {
    console.log("There's no winner! It was a DRAW!");
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("human\tx\tcomputer");
  console.log(`${humanChoice}\t \t${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a draw.");
    return;
  }
  else if (humanChoice === "rock" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    computerScore++;
  } 
  else {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
    humanScore++;
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


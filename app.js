let computerScore = 0;
let humanScore = 0;

playGame();

/* This function is responsible
 * to return the corespondent choice 
 * between rock, paper or scissors
*/
function choice(number) {
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors"
  }
}

function displayMessage(message, winnerChoice, loserChoice) {
  console.log(`${message} ${winnerChoice} beats ${loserChoice}`);
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  return choice(randomNumber);
}


function getHumanChoice() {
  const humanChoice = prompt("What's your play?");
  return humanChoice;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  if (computerScore > humanScore) {
    console.log("You lose the game!");
    console.log(`computer ${computerScore} vs ${humanScore} human`);
  } else if(humanScore > computerScore) {
    console.log("You win the game!");
    console.log(`computer ${computerScore} vs ${humanScore} human`);
  } else {
    console.log("It's a tie!");
    console.log(`computer ${computerScore} vs ${humanScore} human`);
  }
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("computer", computerChoice, "vs ", humanChoice, "human");

  if (computerChoice === humanChoice) {
    console.log("It's a tie");
  } else if ((computerChoice === "rock" && humanChoice === "scissors")
    || (computerChoice === "paper" && humanChoice === "rock")
    || (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    displayMessage("You lose!", computerChoice, humanChoice);
    computerScore++;
  } else {
    displayMessage("You win!", humanChoice, computerChoice);
    humanScore++;
  }
}
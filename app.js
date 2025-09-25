const options = document.querySelector("#options");
const result = document.querySelector("#result");
const humanScoreLabel = document.querySelector("#humanScore");
const computerScoreLabel = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");
const start = document.querySelector("#start");

let humanScore = 0;
let computerScore = 0;
let round = 0; 

initializeGame();
resetOptions();

start.addEventListener("click", () => {
  options.addEventListener("click", optionSelected);
  start.style.display = "none";
  options.style.display = "inherit";
  initializeGame();
});


function playRound(humanChoice, computerChoice) {
  round++;

  if (humanChoice === computerChoice) {
    addRoundResult(humanChoice, computerChoice, "It's a draw.");
    return;
  }
  else if (humanChoice === "rock" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "rock") {
    
    addRoundResult(
      humanChoice, 
      computerChoice, 
      `You lose! ${computerChoice} beats ${humanChoice}.`,
    );
    computerScore++;
  }
  else {
    addRoundResult(
      humanChoice, 
      computerChoice, 
      `You Win! ${humanChoice} beats ${computerChoice}.`,
    );
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

function resetOptions() {
  start.style.display = "inherit";
  options.style.display = "none";
}

function initializeGame() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  result.textContent = "";
  winner.textContent = "";
  updateScore();
}

// callback function to get the human option
function optionSelected(e) {
  let humanChoice;
  switch (e.target.id) {
    case "rock":
    case "paper":
    case "scissors":
      humanChoice = e.target.id;
      break;
    default:
      return;
  }
  e.stopPropagation();
  const computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  playRound(humanChoice, computerChoice);
  updateScore();

  if (round == 5) {
    options.removeEventListener("click", optionSelected);
    showWinner();
    resetOptions();
    start.textContent = "Restart?";
  }
}

function addRoundResult(humanChoice, computerChoice, message) {
  const roundMessage = document.createElement("h2");
  roundMessage.textContent = `Round: ${round}`;

  const choices = document.createElement("p");
  choices.textContent = `human -> ${humanChoice} x ${computerChoice} <- computer`;

  const roundWinner = document.createElement("p");
  roundWinner.textContent = message;
  
  result.appendChild(roundMessage);
  result.appendChild(choices);
  result.appendChild(roundWinner);
} 

function updateScore() {
  humanScoreLabel.textContent = humanScore;
  computerScoreLabel.textContent = computerScore;
}

function showWinner() {
  if (humanScore === computerScore) {
    winner.textContent = "The game was a draw";
  } else if (humanScore > computerScore) {
    winner.textContent = "You win the game!";
  } else {
    winner.textContent = "You lose the game!";
  }
}
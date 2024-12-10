let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const randomOption = Math.floor(Math.random() * 3);

  switch (randomOption) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Get an option:\n - Rock\n - Paper\n - Scissors");
  choice = choice.toLowerCase();
  switch (choice) {
    case "rock": case "paper": case "scissors":
      return choice;
    default:
      return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log("Human:", humanChoice, "\nComputer:", computerChoice)
  if (humanChoice === computerChoice) {
    console.log("The round was a tie!");
    return;
  }

  if (humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win the round!");
      return;
  } else {
    computerScore++;
    console.log("You lose the round!");
    return;
  }


}

function playGame() {
  for(let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, "x", computerScore);
  }

  whoWin();
}

function whoWin(){
  if(humanScore > computerScore) {
    console.log("You win the game!!!");
  } else if(computerScore > humanScore){
    console.log("Computer win the game!!!");
  } else {
    console.log("The game was a tie!!!");
  }
}

playGame();
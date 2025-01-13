const results = document.querySelector('#results');

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

function playRound(humanChoice, computerChoice) {
  const choices = document.createElement('p');
  const scoreboard = document.createElement('p');

  choices.innerText = `Human: ${humanChoice}, Computer: ${computerChoice}`;
  if (humanChoice === computerChoice) {
    scoreboard.innerText = "\nThe round was a tie!";
  } else if (humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      scoreboard.innerText = "\nYou win the round!";
  } else {
    computerScore++;
    scoreboard.innerText = "\nYou lose the round!";
  }


  results.innerHTML = "";
  results.appendChild(choices);
  results.appendChild(scoreboard);


}

function playGame(humanChoice) {
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  // whoWin();
}

function whoWin(){
  if(humanScore > computerScore) {
    console.log("You win the game!!!");
  } else if(computerScore > humanScore){
    console.log("Computer win the game!!!");
  } else {a
    console.log("The game was a tie!!!");
  }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', e => playGame(e.target.id)));

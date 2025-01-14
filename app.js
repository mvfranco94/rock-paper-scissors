const results = document.querySelector('#results');

let round = 0;
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
  const roundBoard = document.createElement('p');
  const choices = document.createElement('p');
  const scoreboard = document.createElement('p');

  roundBoard.textContent = `Round: ${round + 1}`;

  choices.innerText = `Human: ${humanChoice}, Computer: ${computerChoice}`;
  if (humanChoice === computerChoice) {
    scoreboard.innerText = "The round was a tie!";
  } else if (humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      scoreboard.innerText = "You win the round!";
  } else {
    computerScore++;
    scoreboard.innerText = "You lose the round!";
  }

  results.appendChild(roundBoard);
  results.appendChild(choices);
  results.appendChild(scoreboard);


}

function playGame(humanChoice) {
  
  if(round < 5) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    if (round >= 5) {
      whoWin();
      buttons.forEach(button => button.disabled = true);
    }
  }
}

function whoWin(){
  const para = document.createElement('p');
  if(humanScore > computerScore) {
    para.textContent = "You win the game!!!";
  } else if(computerScore > humanScore){
    para.textContent = "Computer win the game!!!";
  } else {a
    para.textContent = "The game was a tie!!!";
  }

  results.appendChild(para);
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', e => playGame(e.target.id)));

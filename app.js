const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomOption = Math.floor(Math.random() * 3);

  return options[randomOption];
}
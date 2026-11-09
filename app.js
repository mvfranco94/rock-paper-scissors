function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  return choice(randomNumber);
}


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

function getHumanChoice() {
  const humanChoice = prompt("What's your play?");
  return humanChoice;
}
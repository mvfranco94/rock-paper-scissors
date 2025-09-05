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

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}
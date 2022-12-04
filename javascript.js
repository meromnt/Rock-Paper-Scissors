function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }
  function playRound (playerSelection, computerSelection){

  }

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));


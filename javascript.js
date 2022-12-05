function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }




  function playRound (playerSelection, computerSelection){
   if (playerSelection == "rock" && computerSelection == "scissors"){
    let text = "You win, rock beats scissors!";
    return text;
   }
   else if (playerSelection == "paper" && computerSelection == "rock") {
text = "You win , paper beats rock!";
return text;
   }
   else if (playerSelection == "scissors" && computerSelection == "paper"){
    text = "You win , scissors beat paper!";
    return text;
   }
   else {
    text = "You lose";
    return text;
   }
  }

  
  let playerSelection = ["rock" , "paper" , "scissors"];
  playerSelection = prompt("Choose your weapon!")
  playerSelection = playerSelection.toUpperCase()
  playerSelection = playerSelection.toLowerCase()
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

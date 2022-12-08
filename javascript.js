function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }




  function playRound (playerSelection, computerSelection){
   if (playerSelection == "rock" && computerSelection == "scissors"){
    let text = "You win, rock beats scissors!";
    console.log(playerScore++ , computerScore);
    return text;

   }
   else if (playerSelection == "paper" && computerSelection == "rock") {
text = "You win , paper beats rock!";
 console.log(playerScore++ , computerScore);
return text;

   }
   else if (playerSelection == "scissors" && computerSelection == "paper"){
    console.log (playerScore++ , computerScore)
    
    text = "You win , scissors beat paper!";
    return text;
   }
   else {
      console.log(playerScore , computerScore++);
    text = "You lose, computer wins round!";
    return text;
   }
  }
  
  let playerSelection = ["rock" , "paper" , "scissors"];
  playerSelection = prompt("Choose your weapon!")
  playerSelection = playerSelection.toUpperCase()
  playerSelection = playerSelection.toLowerCase()
  let computerSelection = getComputerChoice();
   let playerScore = 0;
   let computerScore = 0;
 


  

  function game () {
   
   for (let i = 1;i < 6; i++) {
      playerSelection = prompt("Choose your weapon!")
      computerSelection = getComputerChoice()
      playRound(playerSelection , computerSelection);
         console.log("round over:"+i);
         console.log(text);
         if ( i == 5) {
          if (playerScore > computerScore) {
            console.log("Player Wins!")
          }
          else {
            console.log("Computer Wins!")
          }
         }
         
        

         




   }
} 
console.log(game(playRound(playerSelection , computerSelection)));
  




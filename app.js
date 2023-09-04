const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
let GameRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function(){
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return ROCK;
  } else if (randomNumber < 2 / 3) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = function(pChoice,cChoice){
//   if(pChoice === cChoice)
//   {
//     return "it's  a draw!!"
//   }
//   else if(pChoice === ROCK && cChoice === SCISSORS ||pChoice === SCISSORS && cChoice === PAPER || pChoice === PAPER && cChoice === ROCK)
//   {
//     return "Player Wins!!"
//   }
//   else
//   {
//     return "Computer Wins!!"
//   }
// }

const getWinner = (pChoice,cChoice)=>
  pChoice === cChoice ? "it's  a draw!!" 
  : (pChoice === ROCK && cChoice === SCISSORS)
  || (pChoice === SCISSORS && cChoice === PAPER)
  || (pChoice === PAPER && cChoice === ROCK) ?
  "Player Wins!!" : "Computer Wins!!";


startGameBtn.addEventListener('click', function() {
  if(GameRunning)
  {
    return;
  }
  GameRunning =true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection  = getComputerChoice();
  const Winner = getWinner(playerSelection,computerSelection)
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(Winner);
  let message=`You had picked ${playerSelection}, Computer had picked ${computerSelection}, so you `;
  Winner === "it's  a draw!!" ? message += 'have a draw'
  : Winner === "Player Wins!!" ? message += 'have won'
  : message += 'have lost and computer wins';
  alert(message);
  GameRunning=false;

});

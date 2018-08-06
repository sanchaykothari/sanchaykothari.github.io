let userScore = 0;
let computerScore = 0;
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");
const userScorePage = document.getElementById("user-score");
const computerScorePage = document.getElementById("computer-score");
const result = document.getElementById("output");

function getComputerChoice()
{
  
  switch(Math.floor(Math.random()*3))
         {
         case 0:
         return 'rock';
         break;
         case 1:
         return 'paper';
         break;
         case 2:
         return 'scissor';
         break;
         }
}
function determineWinner(userChoice)
{
 let computerChoice = getComputerChoice().toString(); 
  if( userChoice === computerChoice)
    {
      tieGame(userChoice,computerChoice);
    }
  else if(userChoice === 'rock')
    {
      if(computerChoice === 'paper')
        {
          computerWin(userChoice,computerChoice);
        }
      else if(computerChoice === 'scissor')
        {
          userWin(userChoice,computerChoice);
        }
    }
  else if(userChoice === 'paper')
    {
      if(computerChoice === 'scissor')
        {
          computerWin(userChoice,computerChoice);
        }
      else if(computerChoice === 'rock')
        {
          userWin(userChoice,computerChoice);
        }
    }
  else if(userChoice ==='scissor')
    {
      if(computerChoice === 'rock')
        {
          computerWin(userChoice,computerChoice);
        }
      else if(computerChoice === 'paper')
        {
          userWin(userChoice,computerChoice);
        }
    }
}
function computerWin(userChoice,computerChoice){
  const subuser = "user".fontsize(3).sub();
  const subcomp = "comp".fontsize(3).sub();
  computerScore++;
  userScorePage.innerHTML = `${userScore}`;
  computerScorePage.innerHTML = `${computerScore}`;
  result.innerHTML = `${userChoice}${subuser} lose to ${computerChoice}${subcomp}. You lose `;
}
function userWin(userChoice,computerChoice){
  const subuser = "user".fontsize(3).sub();
  const subcomp = "comp".fontsize(3).sub();
  userScore++;
  userScorePage.innerHTML = `${userScore}`;
  computerScorePage.innerHTML = `${computerScore}`;
  result.innerHTML = `${userChoice}${subuser} beats ${computerChoice}${subcomp}. You Won `;
}
function tieGame(userChoice,computerChoice){
  const subuser = "user".fontsize(3).sub();
  const subcomp = "comp".fontsize(3).sub();
  userScorePage.innerHTML = `${userScore}`;
  computerScorePage.innerHTML = `${computerScore}`;
  result.innerHTML = `${userChoice}${subuser} tie ${computerChoice}${subcomp}. It's a Draw. `;
}
function playGame()
{
  rock.addEventListener('click', () => determineWinner("rock"));
  paper.addEventListener('click', () => determineWinner("paper"));
  scissor.addEventListener('click', () => determineWinner("scissor"));
 /* var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log('users choice :' + userChoice);
  console.log('computers choice :' + computerChoice);
console.log(determineWinner(userChoice,computerChoice));*/
}

playGame();

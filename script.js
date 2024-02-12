const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const WELCOME_MESSAGE = `
>>-- The Odin Project | Foundations Course | JavaScript Basics --<<
>>---------------------------------------------------------------<<
>>----------------| PROJECT ROCK PAPER SCISSORS |----------------<<
>>---------------------------------------------------------------<<
>>--------------------------- drevelob --------------------------<<
`;
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result-container');
const resultMessage = document.querySelector('.result-message');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');

playerScore.innerText = 0;
computerScore.innerText = 0;

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});

function getComputerChoice() {

  function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }

  let computerChoice;

  switch (getRandomInt(3)) {
    case 1:
      computerChoice = ROCK;
      break;
    case 2:
      computerChoice = PAPER;
      break;
    case 3:
      computerChoice = SCISSORS;
      break;
  }

  return computerChoice;
}

function displaySelection(player, computer) {

  const playerSelectionIcon = document.querySelector(".player-selection");
  const computerSelectionIcon = document.querySelector(".computer-selection");

  switch (player) {
    case ROCK:
      playerSelectionIcon.innerText = "✊";
      break;
    case PAPER:
      playerSelectionIcon.innerText = "🖐️";
      break;
    case SCISSORS:
      playerSelectionIcon.innerText = "✌️";
      break;
  }

  switch (computer) {
    case ROCK:
      computerSelectionIcon.innerText = "✊";
      break;
    case PAPER:
      computerSelectionIcon.innerText = "🖐️";
      break;
    case SCISSORS:
      computerSelectionIcon.innerText = "✌️";
      break;
  }
}

function playRound() {

  let result;
  let playerSelection = this.value;
  let computerSelection = getComputerChoice();

  displaySelection(playerSelection, computerSelection);

  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    result = 0
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    result = 1;
  }

  function displayResult(result) {
    let message;
    let gameWinner;

    resultMessage.className = "result-message";

    switch (result) {
      case 1:
        message = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} 
        (っ◕‿◕)っ`;
        playerScore.innerText++;
        break;
      case 0:
        message = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} 
        (╥﹏╥)`;
        computerScore.innerText++;
        break;
      default:
        message = 'Draw! \n( ¬_¬)';
        break;
    }

    if (playerScore.innerText == 5 || computerScore.innerText == 5) {
      gameWinner = (playerScore.innerText > computerScore.innerText)
        ? 'Player'
        : 'Computer';

      message = `${gameWinner.toUpperCase()} Winner!!! ୧(•̀ᴗ•́)୨`;

      resultMessage.className = 'result-winner';
      playerScore.innerText = 0;
      computerScore.innerText = 0;
    }

    resultMessage.innerText = message;
  }

  return displayResult(result);
}

console.log(WELCOME_MESSAGE);
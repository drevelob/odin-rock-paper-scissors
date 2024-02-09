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

function getPlayerChoice() {

  let input = prompt('Please type your choice');

  if (input) {
    let playerChoice = input.toLowerCase();

    if (
      playerChoice === ROCK ||
      playerChoice === PAPER ||
      playerChoice === SCISSORS
    ) {
      return playerChoice;
    }
    console.log('***| Incorrect input |***');
    return getPlayerChoice();
  } else {
    return getPlayerChoice();
  }
}

function playRound() {

  let result;
  let playerSelection = this.value;
  let computerSelection = getComputerChoice();

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

    switch (result) {
      case 1:
        message = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} (っ◕‿◕)っ`;
        playerScore.innerText++
        break;
      case 0:
        message = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} (╥﹏╥)`;
        computerScore.innerText++
        break;
      default:
        message = 'Draw! ( ¬_¬)';
        break;
    }

    if (playerScore.innerText == 5 || computerScore.innerText == 5) {
      gameWinner = (playerScore.innerText > computerScore.innerText)
        ? 'Player'
        : 'Computer';

      message = `${gameWinner.toUpperCase()} Winner!!! ୧(•̀ᴗ•́)୨`;

      playerScore.innerText = 0;
      computerScore.innerText = 0;
    }

    resultMessage.innerText = message;
  }

  return displayResult(result);
}

function game() {

  let playerScore = 0;
  let computerScore = 0;
  let gameWinner;
  let result;

  result = playRound();
  console.log(result);

  if (result.charAt(9) === 'W') {
    playerScore++;
  } else {
    computerScore++;
  }

  result = playRound();
  console.log(result);

  if (result.charAt(9) === 'W') {
    playerScore++;
  } else {
    computerScore++;
  }

  result = playRound();
  console.log(result);

  if (result.charAt(9) === 'W') {
    playerScore++;
  } else {
    computerScore++;
  }

  result = playRound();
  console.log(result);

  if (result.charAt(9) === 'W') {
    playerScore++;
  } else {
    computerScore++;
  }

  result = playRound();
  console.log(result);

  if (result.charAt(9) === 'W') {
    playerScore++;
  } else {
    computerScore++;
  }

  playerScore > computerScore
    ? (gameWinner = 'Player')
    : (gameWinner = 'Computer');
  return `***| ${gameWinner} Winner!!! ＼(￣O￣) |***`;
}

console.log(WELCOME_MESSAGE);
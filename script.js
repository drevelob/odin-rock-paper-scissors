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
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    result = `***| You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} (╥﹏╥) |***`;
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    result = `***| You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} (っ◕‿◕)っ |***`;
  } else {
    console.log('***| Draw! |***');
    return playRound();
  }

  return result;
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
console.log(game());
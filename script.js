const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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
    console.log('Incorrect input');
    return getPlayerChoice();
  } else {
    return getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {

  console.log(playerSelection, computerSelection)

  let result;

  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    result = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    result = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else {
    return playRound(getPlayerChoice('rock'), getComputerChoice());
  }

  return result;
}

const playerSelection = getPlayerChoice('rock');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
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

function getPlayerChoice(input) {

  if (input) {
    let playerChoice = input.toLowerCase();

    if (
      playerChoice === ROCK ||
      playerChoice === PAPER ||
      playerChoice === SCISSORS
    ) {
      return playerChoice;
    }
    return 'Incorrect input';
  }
}
// Possible choices
const choices = ['rock', 'paper', 'scissors'];

// Map user input abbreviations to full choice names
const userChoicesMap = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
};

// Outcome messages for each choice
const outcomeMessages = {
  rock: {
    paper: 'Paper covers rock, you lose!',
    scissors: 'Rock crushes scissors, you win!',
  },
  paper: {
    scissors: 'Scissors cuts paper, you lose!',
    rock: 'Paper covers rock, you win!',
  },
  scissors: {
    rock: 'Rock crushes scissors, you lose!',
    paper: 'Scissors cuts paper, you win!',
  },
};

// Outcome results (winning) for each choice
const outcomeResults = {
  rock: {
    paper: false,
    scissors: true,
  },
  paper: {
    scissors: false,
    rock: true,
  },
  scissors: {
    rock: false,
    paper: true,
  },
};

// Game scores
const scores = { user: 0, computer: 0, tie: 0 };

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to play the game
function playGame(userChoice) {
  const capitalizedUserChoice = capitalize(userChoice);
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display choices
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>You chose: ${capitalizedUserChoice}</p>
    <p>Computer chose: ${capitalize(computerChoice)}</p>
  `;

  // Determine outcome
  if (userChoice === computerChoice) {
    resultDiv.innerHTML += "<p>It's a tie!</p>";
    scores['tie']++;
  } else {
    resultDiv.innerHTML += `<p>${outcomeMessages[userChoice][computerChoice]}</p>`;
    if (outcomeResults[userChoice][computerChoice]) {
      scores['user']++;
    } else {
      scores['computer']++;
    }
  }

  // Display scores
  resultDiv.innerHTML += `<p>Your score: ${scores['user']}, Computer score: ${scores['computer']}, Ties: ${scores['tie']}</p>`;
}

// Button event listeners
document
  .getElementById('rock')
  .addEventListener('click', () => playGame('rock'));
document
  .getElementById('paper')
  .addEventListener('click', () => playGame('paper'));
document
  .getElementById('scissors')
  .addEventListener('click', () => playGame('scissors'));

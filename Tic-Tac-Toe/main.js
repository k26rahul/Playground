import { gameState, makeMove, resetGameState } from './ticTacToeGame.js';

const playerXSymbol = 'X';
const playerOSymbol = 'O';

const statusElement = document.querySelector('.game__status');
const cellElements = document.querySelectorAll('.grid__cell');

function resetGame() {
  cellElements.forEach((cellElement, index) => {
    cellElement.textContent = '';
    cellElement.addEventListener('click', () => handleCellClick(index));
  });

  resetGameState();
}

resetGame();

function getPlayerSymbol(player) {
  return player === 'X' ? playerXSymbol : playerOSymbol;
}

function handleCellClick(index) {
  const cellElement = cellElements[index];

  cellElement.textContent = getPlayerSymbol(gameState.currentPlayer);
  cellElement.classList.add(gameState.currentPlayer);
  makeMove(index);
  updateStatus();

  if (gameState.isGameOver) {
    resetGame();
  }
}

function updateStatus() {
  if (gameState.winner) {
    statusElement.textContent = `Player ${getPlayerSymbol(
      gameState.winner
    )} wins!`;
    return resetGameState();
  }
  if (gameState.isGameOver) {
    statusElement.textContent = "Game over. It's a draw!";
    return resetGameState();
  }
  statusElement.textContent = `Current move: Player ${getPlayerSymbol(
    gameState.currentPlayer
  )}`;
}

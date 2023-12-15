import { state, makeMove, resetGame } from './ticTacToeGame.js';

let playerXSymbol = 'X';
let playerOSymbol = 'O';

const statusElement = document.querySelector('.game__status');
const cellElements = document.querySelectorAll('.grid__cell');

cellElements.forEach((cellElement, index) => {
  cellElement.addEventListener('click', () =>
    handleCellClick(cellElement, index)
  );
});

function getPlayerSymbol(player) {
  return player === 'X' ? playerXSymbol : playerOSymbol;
}

function handleCellClick(cellElement, index) {
  cellElement.textContent = getPlayerSymbol(state.currentPlayer);
  cellElement.classList.add(state.currentPlayer);
  makeMove(index);
  updateUI();
}

function updateUI() {
  if (state.winner) {
    statusElement.textContent = `Player ${getPlayerSymbol(state.winner)} wins!`;
    return resetGame();
  }
  if (state.gameOver) {
    statusElement.textContent = "Game over. It's a draw!";
    return resetGame();
  }
  statusElement.textContent = `Current move: Player ${getPlayerSymbol(
    state.currentPlayer
  )}`;
}

// Tic-Tac-Toe State Machine
//
// The state machine manages the state of a tic-tac-toe game.
// It provides functions to make moves, check for a winner,
// determine if the board is full, and reset the game.

const gameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningLine: null,
  isGameOver: false,
};

/**
 * Resets the game state to its initial values.
 */
function resetGameState() {
  gameState.board = Array(9).fill(null);
  gameState.currentPlayer = 'X';
  gameState.winner = null;
  gameState.winningLine = null;
  gameState.isGameOver = false;
}

/**
 * Makes a move on the game board at the specified index.
 * @param {number} index - The index on the game board.
 */
function makeMove(index) {
  if (gameState.isGameOver || gameState.board[index] !== null) return;

  gameState.board[index] = gameState.currentPlayer;
  if (checkForWinner() || isBoardFull()) {
    gameState.isGameOver = true;
    return;
  }

  gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
}

/**
 * Checks for a winner on the current game board.
 * @returns {boolean} - True if there is a winner, false otherwise.
 */
function checkForWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameState.board[a] &&
      gameState.board[a] === gameState.board[b] &&
      gameState.board[a] === gameState.board[c]
    ) {
      gameState.winner = gameState.currentPlayer;
      gameState.winningLine = pattern;
      return true;
    }
  }

  return false;
}

/**
 * Checks if the game board is full.
 * @returns {boolean} - True if the board is full, false otherwise.
 */
function isBoardFull() {
  return gameState.board.every(cell => cell !== null);
}

export { gameState, makeMove, resetGameState };

// Tic-Tac-Toe State Machine
//
// The state machine manages the state of a tic-tac-toe game.
// It provides functions to make moves, check for a winner,
// determine if the board is full, and reset the game.

/**
 * Represents the state of a Tic-Tac-Toe game.
 * @typedef {Object} GameState
 * @property {Array} board - The game board represented as an array with 9 cells, initialized to null.
 * @property {string} currentPlayer - The symbol ('X' or 'O') of the current player.
 * @property {string|null} winner - The symbol ('X' or 'O') of the winning player, or null if there is no winner.
 * @property {Array<number>|null} winningLine - An array of indices on the board forming the winning line, or null if there is no winner.
 * @property {boolean} isGameOver - Indicates whether the game is over (true) or still in progress (false).
 */

/**
 * The state of a Tic-Tac-Toe game.
 * @type {GameState}
 */
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
 * Winning lines on the Tic-Tac-Toe board.
 * @type {Array<Array<number>>}
 */
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Checks for a winner on the given game board.
 * @param {Array} board - The current state of the game board.
 * @returns {Object|null} - An object containing the winner and winning line if there is a winner, or null otherwise.
 */
function checkWinner(board) {
  for (const line of winningLines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      /**
       * Object representing the winner and the winning line.
       * @type {Object}
       * @property {string} winner - The symbol ('X' or 'O') of the winning player.
       * @property {Array<number>} winningLine - The indices on the board that form the winning line.
       */
      return { winner: board[a], winningLine: line };
    }
  }
  return null;
}

/**
 * Checks if the given game board is full.
 * @param {Array} board - The current state of the game board.
 * @returns {boolean} - True if the board is full, false otherwise.
 */
function isBoardFull(board) {
  return board.every(cell => cell !== null);
}

export { gameState, makeMove, resetGameState };

const state = {};

function resetGame() {
  state.board = Array(9).fill(null);
  state.currentPlayer = 'X';
  state.winner = null;
  state.winningLine = null;
  state.gameOver = false;
}
resetGame();

function makeMove(index) {
  if (state.gameOver || state.board[index] !== null) return;

  state.board[index] = state.currentPlayer;
  if (checkWinner() || isBoardFull()) {
    state.gameOver = true;
    return;
  }

  state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (
      state.board[a] &&
      state.board[a] === state.board[b] &&
      state.board[a] === state.board[c]
    ) {
      state.winner = state.currentPlayer;
      state.winningLine = line;
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  return state.board.every(cell => cell !== null);
}

export { state, makeMove, resetGame };

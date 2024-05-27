export default class TicTacToeGame {
  constructor(onGameStateChange) {
    this.onGameStateChange = onGameStateChange;
    this.resetState();
  }

  resetState() {
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
      isGameOver: false,
    };
    this.onGameStateChange(this.state);
  }

  makeMove(index) {
    if (this.isMovePossible(index)) {
      this.state.board[index] = this.state.currentPlayer;

      const winnerResult = checkWinner(this.state.board);
      if (winnerResult) {
        this.state.winner = winnerResult.winner;
        this.state.winningLine = winnerResult.winningLine;
        this.state.isGameOver = true;
      } else if (isBoardFull(this.state.board)) {
        this.state.isGameOver = true;
      } else {
        this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
      }

      this.onGameStateChange(this.state);
    }
  }

  getAIMove(isMaximizing = true) {
    const bestMove = minimax(this.state.board, 3, isMaximizing).bestMove;
    this.makeMove(bestMove); // Automatically make the AI move
  }

  isMovePossible(index) {
    return !this.state.isGameOver && this.state.board[index] === null;
  }
}

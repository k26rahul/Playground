export class Minimax {
  constructor({
    isTerminal,
    getPossibleMoves,
    generateNewState,
    evaluateState,
    useAlphaBetaPruning = false,
    hashState,
  }) {
    this.isTerminal = isTerminal;
    this.getPossibleMoves = getPossibleMoves;
    this.generateNewState = generateNewState;
    this.evaluateState = evaluateState;
    this.useAlphaBetaPruning = useAlphaBetaPruning;
    this.hashState = hashState;
    this.transpositionTable = new Map();
  }

  retrieveFromTranspositionTable(hash, depth, alpha, beta, bestScore) {
    if (this.transpositionTable.has(hash)) {
      const cachedEntry = this.transpositionTable.get(hash);
      if (cachedEntry.depth >= depth) {
        if (cachedEntry.flag === 'exact') {
          return {
            bestMove: cachedEntry.bestMove,
            bestScore: cachedEntry.bestScore,
          };
        } else if (cachedEntry.flag === 'lowerbound') {
          alpha = Math.max(alpha, cachedEntry.bestScore);
        } else if (cachedEntry.flag === 'upperbound') {
          beta = Math.min(beta, cachedEntry.bestScore);
        }

        if (alpha >= beta) {
          return {
            bestMove: cachedEntry.bestMove,
            bestScore: cachedEntry.bestScore,
          };
        }
      }
    }

    return { alpha, beta, bestScore };
  }

  run(state, depth, isMaximizing, alpha = -Infinity, beta = Infinity) {
    const hash = this.hashState(state);
    const retrievalResult = this.retrieveFromTranspositionTable(
      hash,
      depth,
      alpha,
      beta,
      -Infinity
    );

    alpha = retrievalResult.alpha;
    beta = retrievalResult.beta;

    if (retrievalResult.bestMove !== undefined) {
      return retrievalResult;
    }

    if (depth === 0 || this.isTerminal(state)) {
      const score = this.evaluateState(state, isMaximizing);
      return { bestMove: null, bestScore: score };
    }

    const possibleMoves = this.getPossibleMoves(state);

    let bestScore = isMaximizing ? -Infinity : Infinity;
    let bestMove = null;

    for (const move of possibleMoves) {
      const newState = this.generateNewState(state, move);
      const childResult = this.run(
        newState,
        depth - 1,
        !isMaximizing,
        alpha,
        beta
      );
      const childScore = childResult.bestScore;

      if (isMaximizing) {
        if (childScore > bestScore) {
          bestScore = childScore;
          bestMove = move;
        }
        alpha = Math.max(alpha, bestScore);
      } else {
        if (childScore < bestScore) {
          bestScore = childScore;
          bestMove = move;
        }
        beta = Math.min(beta, bestScore);
      }

      if (this.useAlphaBetaPruning && alpha >= beta) {
        break; // Alpha-beta pruning
      }
    }

    this.transpositionTable.set(hash, {
      depth,
      flag:
        bestScore <= alpha
          ? 'upperbound'
          : bestScore >= beta
          ? 'lowerbound'
          : 'exact',
      bestMove,
      bestScore,
    });

    return { bestMove, bestScore };
  }
}

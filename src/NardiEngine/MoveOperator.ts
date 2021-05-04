import { GameState, Move } from './types';

export const toggleTurn = (gameState: GameState): GameState => ({
  ...gameState,
  turn: gameState.turn === 'white' ? 'black' : 'white',
});

export const recordMove = (move: Move, gameState: GameState): GameState => ({
  ...gameState,
  history: [...gameState.history, move],
});

import type { Move, Side, Movement, Board } from './types';

export const toggleTurn = (turn: Side): Side =>
  turn === 'white' ? 'black' : 'white';

export const recordMove = (move: Move, history: Move[]): Move[] => [
  ...history,
  move,
];

// TODO: refactor: break-up (look into tests), clear mutations
export const applyMovementToBoard = (
  movement: Movement,
  board: Board,
): Board => {
  const newBoard = { ...board };

  const [from, to] = movement;
  const sideFrom = newBoard[from].side;

  newBoard[from].quantity -= 1; // MUTATION

  if (newBoard[from].quantity === 0) {
    newBoard[from] = null;
  }

  if (newBoard[to]) {
    newBoard[to].quantity += 1; // MUTATION
  } else {
    newBoard[to] = {
      quantity: 1,
      side: sideFrom,
    };
  }

  return newBoard;
};

import { Move, Side, Movement, Board } from './types';
import cloneDeep from 'lodash.cloneDeep';

export const toggleTurn = (turn: Side): Side =>
  turn === 'white' ? 'black' : 'white';

export const recordMove = (move: Move, history: Move[]): Move[] => [
  ...history,
  move,
];

// TODO: REFACTOR
export const applyMovementToBoard = (
  movement: Movement,
  board: Board,
): Board => {
  const newBoard = cloneDeep(board);

  const [from, to] = movement;
  let sideFrom;

  if (newBoard[from]) {
    sideFrom = newBoard[from].side;
    newBoard[from].quantity -= 1;

    if (newBoard[from].quantity === 0) {
      newBoard[from] = null;
    }
  } else {
    console.error(
      'applyMovementToBoard attempted illegal move: seems like validation failed',
    );
    return { ...board };
  }

  if (newBoard[to]) {
    if (newBoard[to].side !== sideFrom) {
      console.error(
        'applyMovementToBoard attempted illegal move: seems like validation failed',
      );
      return { ...board };
    }
    newBoard[to].quantity += 1;
  } else {
    newBoard[to] = {
      quantity: 1,
      side: sideFrom,
    };
  }

  return newBoard;
};

import type { Move, Side, Movement, Board } from './types';

export const _toggleTurn = (turn: Side): Side =>
  turn === 'white' ? 'black' : 'white';

export const _recordMove = (move: Move, history: Move[]): Move[] => [
  ...history,
  move,
];

export const _addChipToField = (field: Field, side: Side): Field =>
  field ? { ...field, quantity: field.quantity + 1 } : { quantity: 1, side };

export const _subtractChipFromField = (field: Field): Field =>
  field && field.quantity > 1
    ? { ...field, quantity: field.quantity - 1 }
    : null;

export const _applyMovementToBoard = (
  movement: Movement,
  board: Board,
): Board => {
  const [from, to] = movement;
  return {
    ...board,
    [from]: _subtractChipFromField(board[from]),
    [to]: _addChipToField(board[to], board[from].side),
  };
};

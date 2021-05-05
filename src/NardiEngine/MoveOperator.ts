import type { Move, Side, Movement, Board, Field, Chip } from './types';

export const _toggleTurn = (turn: Side): Side =>
  turn === 'white' ? 'black' : 'white';

export const _recordMove = (move: Move, history: Move[]): Move[] => [
  ...history,
  move,
];

export const _addChipToField = (field: Field, side: Side): Chip =>
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
  if (!board[from]) {
    throw '_applyMovementToBoard accepted illegal move: fix the validation';
  }
  const fromField = board[from] as Chip;
  return {
    ...board,
    [from]: _subtractChipFromField(fromField),
    [to]: _addChipToField(board[to], fromField.side),
  };
};

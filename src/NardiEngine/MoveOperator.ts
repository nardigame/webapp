import { Move, Side } from './types';

export const toggleTurn = (turn: Side): Side =>
  turn === 'white' ? 'black' : 'white';

export const recordMove = (move: Move, history: Move[]): Move[] => [
  ...history,
  move,
];

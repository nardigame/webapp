import { GameState } from './types';

export const INITIAL_GAME_STATE: GameState = {
  history: [],
  board: [
    ...Array(11).fill(null),
    { quantity: 15, side: 'black' },
    ...Array(11).fill(null),
    { quantity: 15, side: 'white' },
  ],
  turn: 'white',
};

import { EMPTY_BOARD } from './EMPTY_BOARD';
import type { GameState } from '../types';

export const INITIAL_GAME_STATE: GameState = {
  history: [],
  board: {
    ...EMPTY_BOARD,
    12: { quantity: 15, side: 'black' },
    24: { quantity: 15, side: 'white' },
  },
  turn: 'white',
};

import { GameState } from './types';

export const INITIAL_GAME_STATE: GameState = {
  history: [],
  board: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: { quantity: 15, side: 'black' },
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null,
    23: null,
    24: { quantity: 15, side: 'white' },
  },
  turn: 'white',
};
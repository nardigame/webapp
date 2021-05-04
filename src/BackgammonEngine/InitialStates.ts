import { TypeOfGame, GameState } from './types';

export const InitialStates: {
  [key: TypeOfGame]: GameState;
} = {
  long: {
    history: [
      ...Array(11).fill(null),
      { quantity: 15, side: 'black' },
      ...Array(11).fill(null),
      { quantity: 15, side: 'white' },
    ],
    board: [],
    turn: 'white',
    type: 'long',
  },
};

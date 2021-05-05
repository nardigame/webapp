import { initMatch } from '../NardiMatch';
import { EMPTY_BOARD } from '../constants/EMPTY_BOARD';

describe('initMatch', () => {
  it('should return initial game state', () => {
    expect(initMatch()).toEqual({
      history: [],
      board: {
        ...EMPTY_BOARD,
        12: { quantity: 15, side: 'black' },
        24: { quantity: 15, side: 'white' },
      },
      turn: 'white',
    });
  });
});

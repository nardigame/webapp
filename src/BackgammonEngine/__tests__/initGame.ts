import { initGame } from '../initGame';

describe('initGame', () => {
  it('should return initial game state', () => {
    expect(initGame('long')).toEqual({
      history: [
        ...Array(11).fill(null),
        { quantity: 15, side: 'black' },
        ...Array(11).fill(null),
        { quantity: 15, side: 'white' },
      ],
      board: [],
      turn: 'white',
      type: 'long',
    });
  });
});

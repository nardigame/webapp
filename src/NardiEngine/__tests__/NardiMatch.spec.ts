import { initMatch } from '../NardiMatch';

describe('initMatch', () => {
  it('should return initial game state', () => {
    expect(initMatch()).toEqual({
      history: [],
      board: [
        ...Array(11).fill(null),
        { quantity: 15, side: 'black' },
        ...Array(11).fill(null),
        { quantity: 15, side: 'white' },
      ],
      turn: 'white',
    });
  });
});

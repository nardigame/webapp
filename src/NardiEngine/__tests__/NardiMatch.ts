import { initMatch } from '../NardiMatch';

describe('initMatch', () => {
  it('should return initial game state', () => {
    expect(initMatch()).toEqual({
      history: [
        ...Array(11).fill(null),
        { quantity: 15, side: 'black' },
        ...Array(11).fill(null),
        { quantity: 15, side: 'white' },
      ],
      board: [],
      turn: 'white',
    });
  });
});

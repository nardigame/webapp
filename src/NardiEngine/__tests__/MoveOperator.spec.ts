import { toggleTurn, recordMove } from '../MoveOperator';
import { GameState } from '../types';

const mockBoard: GameState = {
  history: [],
  board: {
    1: null,
    2: null,
    3: { quantity: 2, side: 'black' },
    4: null,
    5: null,
    6: { quantity: 1, side: 'black' },
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: { quantity: 12, side: 'black' },
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: { quantity: 2, side: 'white' },
    22: null,
    23: null,
    24: { quantity: 12, side: 'white' },
  },
  turn: 'white',
};

describe('toggleTurn should change games turn', () => {
  it('case 1', () => {
    expect(
      toggleTurn({
        ...mockBoard,
        turn: 'white',
      }),
    ).toEqual({
      ...mockBoard,
      turn: 'black',
    });
  });

  it('case 2', () => {
    expect(
      toggleTurn({
        ...mockBoard,
        turn: 'black',
      }),
    ).toEqual({
      ...mockBoard,
      turn: 'white',
    });
  });
});

describe('recordMove should add move into gameStates history', () => {
  it('case 1', () => {
    expect(
      recordMove(
        {
          side: 'white',
          roll: [6, 4],
          movements: [
            [24, 18],
            [18, 14],
          ],
        },
        { ...mockBoard },
      ),
    ).toEqual({
      ...mockBoard,
      history: [
        {
          side: 'white',
          roll: [6, 4],
          movements: [
            [24, 18],
            [18, 14],
          ],
        },
      ],
    });
  });

  it('case 2', () => {
    expect(
      recordMove(
        {
          side: 'black',
          roll: [1, 3],
          movements: [
            [12, 11],
            [11, 8],
          ],
        },
        {
          ...mockBoard,
          history: [
            {
              side: 'white',
              roll: [6, 4],
              movements: [
                [24, 18],
                [18, 14],
              ],
            },
          ],
        },
      ),
    ).toEqual({
      ...mockBoard,
      history: [
        {
          side: 'white',
          roll: [6, 4],
          movements: [
            [24, 18],
            [18, 14],
          ],
        },
        {
          side: 'black',
          roll: [1, 3],
          movements: [
            [12, 11],
            [11, 8],
          ],
        },
      ],
    });
  });
});

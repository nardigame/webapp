import { toggleTurn, recordMove, applyMovementToBoard } from '../MoveOperator';

describe('toggleTurn should change games turn', () => {
  it('case 1', () => {
    expect(toggleTurn('white')).toEqual('black');
  });

  it('case 2', () => {
    expect(toggleTurn('black')).toEqual('white');
  });
});

describe('recordMove should add move history array', () => {
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
        [],
      ),
    ).toEqual([
      {
        side: 'white',
        roll: [6, 4],
        movements: [
          [24, 18],
          [18, 14],
        ],
      },
    ]);
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
        [
          {
            side: 'white',
            roll: [6, 4],
            movements: [
              [24, 18],
              [18, 14],
            ],
          },
        ],
      ),
    ).toEqual([
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
    ]);
  });
});

describe('applyMovementToBoard should return changed board according to the move', () => {
  it('case 1', () => {
    expect(
      applyMovementToBoard([24, 20], {
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
      }),
    ).toEqual({
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
      20: { quantity: 1, side: 'white' },
      21: null,
      22: null,
      23: null,
      24: { quantity: 14, side: 'white' },
    });
  });

  it('case 2', () => {
    expect(
      applyMovementToBoard([8, 7], {
        1: null,
        2: null,
        3: { quantity: 2, side: 'black' },
        4: null,
        5: null,
        6: { quantity: 1, side: 'black' },
        7: null,
        8: { quantity: 1, side: 'black' },
        9: null,
        10: null,
        11: { quantity: 1, side: 'white' },
        12: { quantity: 11, side: 'black' },
        13: null,
        14: null,
        15: { quantity: 2, side: 'white' },
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: { quantity: 1, side: 'white' },
        22: null,
        23: null,
        24: { quantity: 11, side: 'white' },
      }),
    ).toEqual({
      1: null,
      2: null,
      3: { quantity: 2, side: 'black' },
      4: null,
      5: null,
      6: { quantity: 1, side: 'black' },
      7: { quantity: 1, side: 'black' },
      8: null,
      9: null,
      10: null,
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      13: null,
      14: null,
      15: { quantity: 2, side: 'white' },
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: { quantity: 1, side: 'white' },
      22: null,
      23: null,
      24: { quantity: 11, side: 'white' },
    });
  });

  it('case 3', () => {
    expect(
      applyMovementToBoard([12, 8], {
        1: null,
        2: null,
        3: { quantity: 2, side: 'black' },
        4: null,
        5: null,
        6: { quantity: 1, side: 'black' },
        7: null,
        8: { quantity: 1, side: 'black' },
        9: null,
        10: null,
        11: { quantity: 1, side: 'white' },
        12: { quantity: 11, side: 'black' },
        13: null,
        14: null,
        15: { quantity: 2, side: 'white' },
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: { quantity: 1, side: 'white' },
        22: null,
        23: null,
        24: { quantity: 11, side: 'white' },
      }),
    ).toEqual({
      1: null,
      2: null,
      3: { quantity: 2, side: 'black' },
      4: null,
      5: null,
      6: { quantity: 1, side: 'black' },
      7: null,
      8: { quantity: 2, side: 'black' },
      9: null,
      10: null,
      11: { quantity: 1, side: 'white' },
      12: { quantity: 10, side: 'black' },
      13: null,
      14: null,
      15: { quantity: 2, side: 'white' },
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: { quantity: 1, side: 'white' },
      22: null,
      23: null,
      24: { quantity: 11, side: 'white' },
    });
  });
});

describe('applyMovementToBoard should return unchanged board and console.error if the move is illegal', () => {
  console.error = jest.fn();

  beforeEach(() => {
    console.error.mockClear();
  });
  it('case 1', () => {
    expect(
      applyMovementToBoard([23, 20], {
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
      }),
    ).toEqual({
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
    });

    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('case 2', () => {
    expect(
      applyMovementToBoard([12, 11], {
        1: null,
        2: null,
        3: { quantity: 2, side: 'black' },
        4: null,
        5: null,
        6: { quantity: 1, side: 'black' },
        7: null,
        8: { quantity: 1, side: 'black' },
        9: null,
        10: null,
        11: { quantity: 1, side: 'white' },
        12: { quantity: 11, side: 'black' },
        13: null,
        14: null,
        15: { quantity: 2, side: 'white' },
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: { quantity: 1, side: 'white' },
        22: null,
        23: null,
        24: { quantity: 11, side: 'white' },
      }),
    ).toEqual({
      1: null,
      2: null,
      3: { quantity: 2, side: 'black' },
      4: null,
      5: null,
      6: { quantity: 1, side: 'black' },
      7: null,
      8: { quantity: 1, side: 'black' },
      9: null,
      10: null,
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      13: null,
      14: null,
      15: { quantity: 2, side: 'white' },
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: { quantity: 1, side: 'white' },
      22: null,
      23: null,
      24: { quantity: 11, side: 'white' },
    });
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});

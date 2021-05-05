import {
  _toggleTurn,
  _recordMove,
  _subtractChipFromField,
  _addChipToField,
  _applyMovementToBoard,
} from '../MoveOperator';
import { EMPTY_BOARD } from '../constants/EMPTY_BOARD';

describe('_toggleTurn should change games turn', () => {
  it('case 1', () => {
    expect(_toggleTurn('white')).toEqual('black');
  });

  it('case 2', () => {
    expect(_toggleTurn('black')).toEqual('white');
  });
});

describe('_recordMove should add move history array', () => {
  it('case 1', () => {
    expect(
      _recordMove(
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
      _recordMove(
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

describe('_addChipToField should add chip of corresponding side to the field', () => {
  it('case 1', () => {
    expect(_addChipToField({ side: 'white', quantity: 1 }, 'white')).toEqual({
      side: 'white',
      quantity: 2,
    });
  });
  it('case 2', () => {
    expect(_addChipToField({ side: 'black', quantity: 3 }, 'black')).toEqual({
      side: 'black',
      quantity: 4,
    });
  });
  it('case 3', () => {
    expect(_addChipToField(null, 'black')).toEqual({
      side: 'black',
      quantity: 1,
    });
  });
});

describe('_subtractChipFromField should remove chip from field', () => {
  it('case 1', () => {
    expect(_subtractChipFromField({ side: 'white', quantity: 1 })).toEqual(
      null,
    );
  });
  it('case 2', () => {
    expect(_subtractChipFromField({ side: 'white', quantity: 2 })).toEqual({
      side: 'white',
      quantity: 1,
    });
  });
  it('case 3', () => {
    expect(_subtractChipFromField({ side: 'black', quantity: 15 })).toEqual({
      side: 'black',
      quantity: 14,
    });
  });
});

describe('_applyMovementToBoard should return changed board according to the move', () => {
  it('case 1', () => {
    expect(
      _applyMovementToBoard([24, 20], {
        ...EMPTY_BOARD,
        12: { quantity: 15, side: 'black' },
        24: { quantity: 15, side: 'white' },
      }),
    ).toEqual({
      ...EMPTY_BOARD,
      12: { quantity: 15, side: 'black' },
      20: { quantity: 1, side: 'white' },
      24: { quantity: 14, side: 'white' },
    });
  });

  it('case 2', () => {
    expect(
      _applyMovementToBoard([8, 7], {
        ...EMPTY_BOARD,
        3: { quantity: 2, side: 'black' },
        6: { quantity: 1, side: 'black' },
        8: { quantity: 1, side: 'black' },
        11: { quantity: 1, side: 'white' },
        12: { quantity: 11, side: 'black' },
        15: { quantity: 2, side: 'white' },
        21: { quantity: 1, side: 'white' },
        24: { quantity: 11, side: 'white' },
      }),
    ).toEqual({
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      7: { quantity: 1, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    });
  });

  it('case 3', () => {
    expect(
      _applyMovementToBoard([12, 8], {
        ...EMPTY_BOARD,
        3: { quantity: 2, side: 'black' },
        6: { quantity: 1, side: 'black' },
        8: { quantity: 1, side: 'black' },
        11: { quantity: 1, side: 'white' },
        12: { quantity: 11, side: 'black' },
        15: { quantity: 2, side: 'white' },
        21: { quantity: 1, side: 'white' },
        24: { quantity: 11, side: 'white' },
      }),
    ).toEqual({
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      8: { quantity: 2, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 10, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    });
  });
});

describe('_applyMovementToBoard should throw exeption if the move is impossible', () => {
  it('case 1', () => {
    expect(() => {
      _applyMovementToBoard([3, 6], {
        ...EMPTY_BOARD,
        24: { quantity: 15, side: 'white' },
        12: { quantity: 15, side: 'black' },
      });
    }).toThrow();
  });
  it('case 2', () => {
    expect(() => {
      _applyMovementToBoard([33, 24], {
        ...EMPTY_BOARD,
        24: { quantity: 15, side: 'white' },
        12: { quantity: 15, side: 'black' },
      });
    }).toThrow();
  });
});

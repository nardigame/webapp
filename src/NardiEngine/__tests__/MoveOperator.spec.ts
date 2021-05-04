import { toggleTurn, recordMove } from '../MoveOperator';

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

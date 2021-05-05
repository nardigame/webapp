import {
  _toggleTurn,
  _recordMove,
  _subtractChipFromField,
  _addChipToField,
  _applyMovementToBoard,
  _applyMovementsToBoard,
  _applyMoveToGame,
} from '../MoveOperator';
import { EMPTY_BOARD } from '../constants/EMPTY_BOARD';
import type {
  Move,
  Board,
  Chip,
  Movement,
  Side,
  GameState,
  Field,
} from '../types';

// TODO: test immutability

describe('_toggleTurn', () => {
  describe('should toggle turn', () => {
    test.each([
      ['white' as Side, 'black' as Side],
      ['black' as Side, 'white' as Side],
    ])('case %#', (turn, expected) => {
      expect(_toggleTurn(turn)).toEqual(expected);
    });
  });
});

describe('_recordMove', () => {
  describe('should add move to history array', () => {
    const move1: Move = {
      side: 'white',
      roll: [6, 4],
      movements: [
        [24, 18],
        [18, 14],
      ],
    };
    const history1: Move[] = [];
    const result1: Move[] = [
      {
        side: 'white',
        roll: [6, 4],
        movements: [
          [24, 18],
          [18, 14],
        ],
      },
    ];

    const move2: Move = {
      side: 'black',
      roll: [1, 3],
      movements: [
        [12, 11],
        [11, 8],
      ],
    };
    const history2: Move[] = [
      {
        side: 'white',
        roll: [6, 4],
        movements: [
          [24, 18],
          [18, 14],
        ],
      },
    ];
    const result2: Move[] = [
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
    ];
    test.each([
      [move1, history1, result1],
      [move2, history2, result2],
    ])('case %#', (move, history, result) => {
      expect(_recordMove(move, history)).toEqual(result);
    });
  });
});

describe('_addChipToField', () => {
  describe('should add chip of corresponding side to the field', () => {
    const field1: Field = { side: 'white', quantity: 1 };
    const side1: Side = 'white';
    const result1: Chip = {
      side: 'white',
      quantity: 2,
    };

    const field2: Field = { side: 'black', quantity: 3 };
    const side2: Side = 'black';
    const result2: Chip = {
      side: 'black',
      quantity: 4,
    };

    const field3: Field = null;
    const side3: Side = 'black';
    const result3: Chip = {
      side: 'black',
      quantity: 1,
    };

    test.each([
      [field1, side1, result1],
      [field2, side2, result2],
      [field3, side3, result3],
    ])('case %#', (field, side, result) => {
      expect(_addChipToField(field, side)).toEqual(result);
    });
  });
});

describe('_subtractChipFromField', () => {
  describe('should remove chip from field', () => {
    const field1: Field = { side: 'white', quantity: 1 };
    const result1: Field = null;

    const field2: Field = { side: 'white', quantity: 2 };
    const result2: Field = {
      side: 'white',
      quantity: 1,
    };

    const field3: Field = { side: 'black', quantity: 15 };
    const result3: Field = {
      side: 'black',
      quantity: 14,
    };

    test.each([
      [field1, result1],
      [field2, result2],
      [field3, result3],
    ])('case %#', (field, result) => {
      expect(_subtractChipFromField(field)).toEqual(result);
    });
  });
});

describe('_applyMovementToBoard', () => {
  describe('should return changed board according to the movement', () => {
    const movement1: Movement = [24, 20];
    const board1: Board = {
      ...EMPTY_BOARD,
      12: { quantity: 15, side: 'black' },
      24: { quantity: 15, side: 'white' },
    };
    const result1: Board = {
      ...EMPTY_BOARD,
      12: { quantity: 15, side: 'black' },
      20: { quantity: 1, side: 'white' },
      24: { quantity: 14, side: 'white' },
    };

    const movement2: Movement = [8, 7];
    const board2: Board = {
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      8: { quantity: 1, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    };
    const result2: Board = {
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      7: { quantity: 1, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    };

    const movement3: Movement = [12, 8];
    const board3: Board = {
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      8: { quantity: 1, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 11, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    };
    const result3: Board = {
      ...EMPTY_BOARD,
      3: { quantity: 2, side: 'black' },
      6: { quantity: 1, side: 'black' },
      8: { quantity: 2, side: 'black' },
      11: { quantity: 1, side: 'white' },
      12: { quantity: 10, side: 'black' },
      15: { quantity: 2, side: 'white' },
      21: { quantity: 1, side: 'white' },
      24: { quantity: 11, side: 'white' },
    };

    test.each([
      [movement1, board1, result1],
      [movement2, board2, result2],
      [movement3, board3, result3],
    ])('case %#', (movement, board, result) => {
      expect(_applyMovementToBoard(movement, board)).toEqual(result);
    });
  });

  describe('should throw exeption if the move is impossible', () => {
    const movement1: Movement = [3, 6];
    const board1: Board = {
      ...EMPTY_BOARD,
      24: { quantity: 15, side: 'white' },
      12: { quantity: 15, side: 'black' },
    };

    const movement2: Movement = [33, 24];
    const board2: Board = {
      ...EMPTY_BOARD,
      24: { quantity: 15, side: 'white' },
      12: { quantity: 15, side: 'black' },
    };

    const movement3: Movement = [NaN, 20];
    const board3: Board = {
      ...EMPTY_BOARD,
      24: { quantity: 15, side: 'white' },
      12: { quantity: 15, side: 'black' },
    };

    test.each([
      [movement1, board1],
      [movement2, board2],
      [movement3, board3],
    ])('case %#', (movement, board) => {
      expect(() => {
        _applyMovementToBoard(movement, board);
      }).toThrow();
    });
  });
});

describe('_applyMovementsToBoard', () => {
  describe('should apply several movements to the board in a row immutably', () => {
    const movements1: Movement[] = [
      [24, 21],
      [21, 16],
    ];
    const board1: Board = {
      ...EMPTY_BOARD,
      12: { quantity: 15, side: 'black' },
      24: { quantity: 15, side: 'white' },
    };
    const result1: Board = {
      ...EMPTY_BOARD,
      12: { quantity: 15, side: 'black' },
      16: { quantity: 1, side: 'white' },
      24: { quantity: 14, side: 'white' },
    };

    const movements2: Movement[] = [
      [12, 10],
      [9, 3],
    ];
    const board2: Board = {
      ...EMPTY_BOARD,
      9: { quantity: 1, side: 'black' },
      10: { quantity: 2, side: 'black' },
      12: { quantity: 15, side: 'black' },
      14: { quantity: 11, side: 'white' },
      24: { quantity: 13, side: 'white' },
    };
    const result2: Board = {
      ...EMPTY_BOARD,
      3: { quantity: 1, side: 'black' },
      10: { quantity: 3, side: 'black' },
      12: { quantity: 14, side: 'black' },
      14: { quantity: 11, side: 'white' },
      24: { quantity: 13, side: 'white' },
    };

    const movements3: Movement[] = [
      [12, 10],
      [10, 4],
    ];
    const board3: Board = {
      ...EMPTY_BOARD,
      9: { quantity: 1, side: 'black' },
      10: { quantity: 2, side: 'black' },
      12: { quantity: 15, side: 'black' },
      14: { quantity: 11, side: 'white' },
      24: { quantity: 13, side: 'white' },
    };
    const result3: Board = {
      ...EMPTY_BOARD,
      4: { quantity: 1, side: 'black' },
      9: { quantity: 1, side: 'black' },
      10: { quantity: 2, side: 'black' },
      12: { quantity: 14, side: 'black' },
      14: { quantity: 11, side: 'white' },
      24: { quantity: 13, side: 'white' },
    };

    test.each([
      [movements1, board1, result1],
      [movements2, board2, result2],
      [movements3, board3, result3],
    ])('case %#', (movements, board, result) => {
      expect(_applyMovementsToBoard(movements, board)).toEqual(result);
    });
  });
});

describe('_applyMoveToGame', () => {
  describe('should return changed gameState according to the move', () => {
    const move1: Move = {
      side: 'white',
      roll: [3, 5],
      movements: [
        [24, 21],
        [21, 16],
      ],
    };
    const game1: GameState = {
      history: [],
      board: {
        ...EMPTY_BOARD,
        12: { quantity: 15, side: 'black' },
        24: { quantity: 15, side: 'white' },
      },
      turn: 'white',
    };
    const result1: GameState = {
      history: [
        {
          side: 'white',
          roll: [3, 5],
          movements: [
            [24, 21],
            [21, 16],
          ],
        },
      ],
      board: {
        ...EMPTY_BOARD,
        12: { quantity: 15, side: 'black' },
        16: { quantity: 1, side: 'white' },
        24: { quantity: 14, side: 'white' },
      },
      turn: 'black',
    };

    const move2: Move = {
      side: 'black',
      roll: [2, 2],
      movements: [
        [12, 10],
        [10, 8],
        [8, 6],
        [6, 4],
      ],
    };
    const game2: GameState = {
      history: [
        {
          side: 'white',
          roll: [3, 5],
          movements: [
            [24, 21],
            [21, 16],
          ],
        },
      ],
      board: {
        ...EMPTY_BOARD,
        12: { quantity: 15, side: 'black' },
        16: { quantity: 1, side: 'white' },
        24: { quantity: 14, side: 'white' },
      },
      turn: 'black',
    };
    const result2: GameState = {
      history: [
        {
          side: 'white',
          roll: [3, 5],
          movements: [
            [24, 21],
            [21, 16],
          ],
        },
        {
          side: 'black',
          roll: [2, 2],
          movements: [
            [12, 10],
            [10, 8],
            [8, 6],
            [6, 4],
          ],
        },
      ],
      board: {
        ...EMPTY_BOARD,
        4: { quantity: 1, side: 'black' },
        12: { quantity: 14, side: 'black' },
        16: { quantity: 1, side: 'white' },
        24: { quantity: 14, side: 'white' },
      },
      turn: 'white',
    };

    const move3: Move = {
      side: 'white',
      roll: [1, 6],
      movements: [
        [24, 18],
        [16, 15],
      ],
    };
    const game3: GameState = {
      history: [
        {
          side: 'white',
          roll: [3, 5],
          movements: [
            [24, 21],
            [21, 16],
          ],
        },
        {
          side: 'black',
          roll: [2, 2],
          movements: [
            [12, 10],
            [10, 8],
            [8, 6],
            [6, 4],
          ],
        },
      ],
      board: {
        ...EMPTY_BOARD,
        4: { quantity: 1, side: 'black' },
        12: { quantity: 14, side: 'black' },
        16: { quantity: 1, side: 'white' },
        24: { quantity: 14, side: 'white' },
      },
      turn: 'white',
    };
    const result3: GameState = {
      history: [
        {
          side: 'white',
          roll: [3, 5],
          movements: [
            [24, 21],
            [21, 16],
          ],
        },
        {
          side: 'black',
          roll: [2, 2],
          movements: [
            [12, 10],
            [10, 8],
            [8, 6],
            [6, 4],
          ],
        },
        {
          side: 'white',
          roll: [1, 6],
          movements: [
            [24, 18],
            [16, 15],
          ],
        },
      ],
      board: {
        ...EMPTY_BOARD,
        4: { quantity: 1, side: 'black' },
        12: { quantity: 14, side: 'black' },
        15: { quantity: 1, side: 'white' },
        18: { quantity: 1, side: 'white' },
        24: { quantity: 13, side: 'white' },
      },
      turn: 'black',
    };

    test.each([
      [move1, game1, result1],
      [move2, game2, result2],
      [move3, game3, result3],
    ])('case %#', (move, game, result) => {
      expect(_applyMoveToGame(move, game)).toEqual(result);
    });
  });
});

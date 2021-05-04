export type Side = 'white' | 'black';

export type Field = {
  quantity: number;
  side: Side;
} | null;

export type Board = {
  1: Field;
  2: Field;
  3: Field;
  4: Field;
  5: Field;
  6: Field;
  7: Field;
  8: Field;
  9: Field;
  10: Field;
  11: Field;
  12: Field;
  13: Field;
  14: Field;
  15: Field;
  16: Field;
  17: Field;
  18: Field;
  19: Field;
  20: Field;
  21: Field;
  22: Field;
  23: Field;
  24: Field;
};

export type Roll = [number, number];

export type Movement = [number, number];

export type Move = {
  side: Side;
  roll: Roll;
  movements: Movement[];
};

export type GameState = {
  history: Move[];
  board: Board;
  turn: Side;
};

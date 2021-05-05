export type Side = 'white' | 'black';

export type Chip = {
  quantity: number;
  side: Side;
};

export type Field = Chip | null;

export type Board = {
  [key: number]: Field;
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
